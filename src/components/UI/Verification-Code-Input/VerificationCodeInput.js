import React from "react";
import ReactCodeInput from "react-verification-code-input-2"

const VerificationCodeInput =(props)=>{
    return (<ReactCodeInput onComplete={props.onComplete}/>)
}

export default VerificationCodeInput