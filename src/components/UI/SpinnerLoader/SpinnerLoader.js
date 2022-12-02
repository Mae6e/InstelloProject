
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const SpinnerLoader = (props) => {

    // const onShowHandler = (event) => {
    //     event.target.style.display = "var(--fa-display, inline-block)"
    // }

    // const onHideHandler = (event) => {
    //     event.target.style.display = "none"
    // }

    // style={props.isShow?{ display: "var(--fa-display, inline-block)" }:{ display: "none" }}

    return (<FontAwesomeIcon  className="spinner"
        icon={faSpinner}/>)
}

export default SpinnerLoader