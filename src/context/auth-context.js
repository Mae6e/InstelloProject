import React, { useState } from "react";
import SigninAPI from "../api/SigninAPI";

export const AuthContext = React.createContext({
    isAuthentication: false,
    onAuthentication: () => { },
    setAuthentication: () => { },
});

const AuthContextProvider = (props) => {

    const getCookie = (cname) => {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const [isAuthentication, setIsAuthentication] = useState((getCookie("email") !== ''))

    const onAuthentication = async (user) => {
         var response = await SigninAPI(user);
           // if(response.isSuccess){
               // setIsAuthentication(true)
              //  document.cookie = `email=${user.email}; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;
          //  }
         return response;
    }

    const setAuthentication = (user) => {
            setIsAuthentication(true)
            document.cookie = `email=${user.email}; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;
   }

    return (
        <AuthContext.Provider value={
            {
                isAuthentication,
                onAuthentication: (user) => onAuthentication(user),
                setAuthentication: (user) => setAuthentication(user)
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
