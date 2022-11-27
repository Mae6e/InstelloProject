import React ,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

const TextInput = (props) => {

    const [isPasswordShow, setPasswordShown] = useState(false)

    let inputContent;
    switch (props.type) {
        case 'password':
            inputContent = <><input {...props} type={isPasswordShow?'text':'password'} /><i onClick={()=>setPasswordShown(!isPasswordShow)}>{isPasswordShow ? eyeSlash : eye}</i></>
            break;
        default:
            break;
    }

    return (<>{inputContent}</>)
}

export default TextInput