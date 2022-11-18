import React from "react"
import { Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css';

export const Notification = (props) => {
    return (
        <div className={`${props.type}-message`} >
            <span style={{ fontSize: "14px" }}>{props.message}</span>
        </div>
    )
}

const NotificationProvider = (message, type) => {
    Store.removeAllNotifications()
    Store.addNotification({
        content: <Notification message={message} type={type} />,
        onRemoval: () => { },
        message: "sdkkdfdk",
        title: "error",
        container: "top-center",
        animationIn: ["animate__animated animate__fadeIn"], 
        animationOut: ["animate__animated animate__zoomOut"],
        dismiss: {
            duration: 2000,
            showIcon: false
        }
    });

}

export default NotificationProvider