import React, { useState } from "react";
import SigninAPI from "../api/SigninAPI";
import getCookie from "../utilities/getCookie";

export const AuthContext = React.createContext({
    isAuthentication: false,
    onAuthentication: () => { },
    setAuthentication: () => { }
});

const AuthContextProvider = (props) => {

    const [isAuthentication, setIsAuthentication] = useState((getCookie("uId") !== ''))

    const onAuthentication = async (user,signal) => {
        var response = await SigninAPI(user,signal);
        return response;
    }

    const setAuthentication = (user) => {
        setIsAuthentication(true)
        document.cookie = `uId=${user.id}; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;
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
