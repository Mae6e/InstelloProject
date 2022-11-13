import React, { useState } from "react";
import Axios from "../Axios";

export const AuthContext = React.createContext({
    isAuthentication: false,
    onAuthentication: () => { }
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

    const [isAuthentication, setIsAuthentication] = useState((getCookie("username") !== ''))

    const onAuthentication = async (user) => {

        let getUserResponse;
        await Axios.get(`/users?username=${user.username}&&password=${user.password}`)
            .then((response) => {
                if (response.status === 200 && response.data.length > 0) {
                    setIsAuthentication(true)
                    document.cookie = `username=${user.username}; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;
                    getUserResponse = { isSuccess: true, message: "success login" }
                }
                else {
                    getUserResponse = { isSuccess: false, message: "error login" }
                }
            })
            .catch((error) => {
                console.log(error);
                getUserResponse = { isSuccess: false, message: error }
            })
        return getUserResponse
    }

    return (
        <AuthContext.Provider value={{ isAuthentication, onAuthentication: (user) => onAuthentication(user) }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
