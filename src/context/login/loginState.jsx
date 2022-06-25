import React from "react";
import { useState } from "react";
import LoginContext from "./loginContext";


const LoginState = (props) => {

    const [loginStatus, setLoginStatus] = useState(false)


    return (
        <LoginContext.Provider value={{loginStatus, setLoginStatus}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginState;