import React, { useState, useEffect } from "react"
import { resources } from "../../resource"
import CustomSrollbar from "../UI/CustomScrollbar/CustomScrollbar"
import {GetNotifications} from "../../api/NotificationAPI"
import SpinnerLoader from "../UI/SpinnerLoader/SpinnerLoader"
import avator from "../../assets/images/avatars/blank-profile.webp"

const NotificationBox = () => {

    const [notifications, setNotifications] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        GetNotifications().then(response => {
            if (response.isSuccess) {
                setNotifications(response.entity)
            }
            setIsLoading(false)
        })
    }, [])

    const notificationBoxContent = {
        false: <CustomSrollbar>
            <ul className="dropdown_scrollbar" data-simplebar>
                {
                    notifications.map((item) => (
                        <li>
                            <a href="trending.html#">
                                <div className="drop_avatar"> <img src={item.image?? avator} alt="" />
                                </div>
                                <div className="drop_content">
                                    <p> <span>{item.senderfullname?? null}</span>  
                                        <span className="text-link"> {item.description} </span>
                                    </p>
                                    <span className="time-ago"> {item.date} </span>
                                </div>
                            </a>
                        </li>))
                }
            </ul>
        </CustomSrollbar>,
        true: <SpinnerLoader />
    }

    return (<div uk-drop="mode: click;offset: 4" className="header_dropdown uk-drop uk-open" style={{ left: "6%", top: "1.5%" }}>
        <h4 className="-mt-5 -mx-5 bg-gradient-to-t from-gray-100 to-gray-50 border-b font-bold px-6 py-3">
            {resources.HEADER.NOTIFICATION} </h4>
            <div className="message-box" style={isLoading ? { textAlign: "center" } : {}}>
            {notificationBoxContent[isLoading]}
        </div>
        {
            notifications.length > 0 && !isLoading ? <a href="trending.html#" className="see-all">{resources.HEADER.SEEALL}</a> :
                (notifications.length === 0 && !isLoading ? <p style={{ marginTop: "1rem" }} className="see-all">{resources.HEADER.NOTEXISTNOTIFICATION}</p> : null)
        }
    </div>)
}

export default NotificationBox