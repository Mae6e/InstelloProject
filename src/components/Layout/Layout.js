import React, { useState } from "react"
import Sidebar from "../Sidebar/Sidebar"
import Header from "../Header/Header"

import './icons.css'
import './uikit.css'
import './style.css'
import './tailwind.css'

const Layout = () => {

    const [isToggle, setToggle] = useState(false)

    const [showHeaderItems, setHeaderItems] = useState(
        {
            isShowNotification: false,
            isShowMessage: false,
            isShowProfile: false
        })


    const toggleHandler = () => {
        setToggle(!isToggle)
        headerHandler(null)
    }
    const contentHandler = () => {
        if (isToggle)
            setToggle(!isToggle)
        headerHandler(null)
    }

    const headerHandler = (key) => {
        if (!key) {
            setHeaderItems({
                isShowNotification: false,
                isShowMessage: false,
                isShowProfile: false
            })
        }
        else {
            const items = { ...showHeaderItems }
            const keys = Object.keys(items);
            keys.map(i => {
                (i === key) ? (items[i] = !items[i]) : (items[i] = false)
            })
            setHeaderItems(items)
            setToggle(false)
        }

    }

    return (<div id="wrapper" className={`${isToggle ? 'sidebar-active' : ''}`} >
        <Sidebar toggleClick={toggleHandler} sidebarClick={() => { headerHandler(null) }} />
        <div className="main_content">
            <Header toggleClick={toggleHandler} showHeaderItems={showHeaderItems} headerClick={(currentKey) => headerHandler(currentKey)} >
            </Header>
            <div className="container pro-container m-auto" onClick={contentHandler}>
                <div className="flex lg:flex-row flex-col items-center lg:py-8 lg:space-x-8"><span>dd</span>
                <br></br>
        
                </div>
            </div>
        </div>
    </div>
    )
}

export default Layout