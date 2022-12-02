import React, { useState, useEffect } from "react";
import { resources } from "../../resource";
import CustomSrollbar from "../UI/CustomScrollbar/CustomScrollbar";
import { GetMessages } from "../../api/MessageAPI"
import SpinnerLoader from "../UI/SpinnerLoader/SpinnerLoader";
import avator from "../../assets/images/avatars/blank-profile.webp"

const MessageBox = () => {

    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        GetMessages().then(response => {
            if (response.isSuccess) {
                setMessages(response.entity)
            }
            setIsLoading(false)
        })
    }, [])

    const messageBoxContent = {
        false:
            <CustomSrollbar>
                <ul className="dropdown_scrollbar" data-simplebar>
                    {
                        messages.map((item) => {
                            return (<li key={item.id}>
                                <a href="trending.html#">
                                    <div className="drop_avatar"> <img src={item.image?? avator} alt="" />
                                    </div>
                                    <div className="drop_content">
                                        <span> {item.senderfullname??null} </span> <time> {item.date}</time>
                                        <p> {item.description} </p>
                                    </div>
                                </a>
                            </li>)
                        })
                    }
                </ul>
            </CustomSrollbar>,
        true: <SpinnerLoader />
    }

    return (<div uk-drop="mode: click;offset: 4" className="header_dropdown uk-drop uk-open" style={{ left: "4%", top: "1.5%" }}>
        <h4
            className="-mt-5 -mx-5 bg-gradient-to-t from-gray-100 to-gray-50 border-b font-bold px-6 py-3">
            {resources.HEADER.MESSAGES} </h4>
        <div className="message-box" style={isLoading ? { textAlign: "center" } : {}}>
            {messageBoxContent[isLoading]}
        </div>
        {
            messages.length > 0 && !isLoading ? <a href="trending.html#" className="see-all">{resources.HEADER.SEEALL}</a> :
                (messages.length === 0 && !isLoading ? <p style={{ marginTop: "1rem" }} className="see-all">{resources.HEADER.NOTEXISTMESSAGE}</p> : null)
        }
    </div>)
}
export default MessageBox