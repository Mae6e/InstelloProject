import React from "react";
import { resources } from "../../../resource";

const SignupRole = (props) => {
    return (<>
            <p style={{ color: "#7d61fd" }}>
                {resources.SIGNUPRule.FIRST_PARAGRAPH}
            </p>
            <br></br>
            <span className="condition-title">
                {resources.SIGNUPRule.TITLE}
            </span>
            <ul>
                <li>{resources.SIGNUPRule.UL1_LI_1}</li>
                <li>{resources.SIGNUPRule.UL1_LI_2}</li>
                <li>{resources.SIGNUPRule.UL1_LI_3}</li>
                <li>{resources.SIGNUPRule.UL1_LI_4}</li>
                <li>{resources.SIGNUPRule.UL1_LI_5}</li>
            </ul>
            <p>{resources.SIGNUPRule.SECOND_PARAGRAPH}</p>
            <p>{resources.SIGNUPRule.THIRD_PARAGRAPH}</p>
            <p>{resources.SIGNUPRule.FORTH_PARAGRAPH}</p>
            <ul className="ul-condition">
                <li>{resources.SIGNUPRule.UL2_LI_1}</li>
                <li>{resources.SIGNUPRule.UL2_LI_2}</li>
                <li>{resources.SIGNUPRule.UL2_LI_3}</li>
                <li>{resources.SIGNUPRule.UL2_LI_4}</li>
                <li>{resources.SIGNUPRule.UL2_LI_5}</li>
                <li>{resources.SIGNUPRule.UL2_LI_6}</li>
                <li>{resources.SIGNUPRule.UL2_LI_7}</li>
                <li>{resources.SIGNUPRule.UL2_LI_8}</li>
                <li>{resources.SIGNUPRule.UL2_LI_9}</li>
            </ul>

            <p>{resources.SIGNUPRule.FIFTH_PARAGRAPH}</p>
            <br></br>

            <button type="button" onClick={props.onConfirmRule} className="bg-pink-600 font-semibold p-2 mt-2 rounded-md text-center text-white w-full">
                موافقم </button>
            <br></br>
        </>)
}

export default SignupRole