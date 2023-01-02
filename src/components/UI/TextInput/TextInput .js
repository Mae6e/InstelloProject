import React ,{useState} from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const TextInput = (props) => {

    const [isPasswordShow, setPasswordShown] = useState(false)

    let inputContent;
    switch (props.type) {
        case 'password':
            inputContent = <><input {...props} type={isPasswordShow?'text':'password'} /><i onClick={()=>setPasswordShown(!isPasswordShow)}>{isPasswordShow ? <FaEyeSlash/> : <FaEye/>}</i></>
            break;
        default:
            break;
    }

    return (<>{inputContent}</>)
}

export default TextInput