import React from "react";
import { useState } from "react";
import LoginContext from "./loginContext";


const LoginState = (props) => {

    // const [login, setLogin] = useState("false")

    const state = {
        "name" : "satish"
    }

    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginState;