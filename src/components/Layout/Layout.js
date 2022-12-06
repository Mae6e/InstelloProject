import React, { useState , useEffect } from "react"
import Sidebar from "../Sidebar/Sidebar"
import useNightMode from "../../hooks/night-mode"
import Header from "../Header/Header"
import Loading from "../UI/Loading/Loading"
import { GetUserInfo } from "../../api/ProfileAPI"
import Explore from "../../containers/Explore/Explore"

import './icons.css'
import './uikit.css'
import './style.css'
import './tailwind.css'

const Layout = () => {

    const [nightMode, toggleNightMode] = useNightMode()

    const [isToggle, setToggle] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [user, setUser] = useState({})

    useEffect(() => {
        
        const controller = new AbortController();
        let mounted = true;

        GetUserInfo({ signal: controller.signal }).then(response => {
            if (response.isSuccess && mounted) {
                setUser(response.entity)
            }
            hideLoadingHandler()
        })
        return () => {
            controller.abort()
            mounted = false
        }
    }, [])

    const hideLoadingHandler =()=>{
        console.log(user)
        setLoading(false)
    }

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
        <Loading className='loading-main' style={isLoading?{display:"flex"}:{display:"none"}} />
        <Sidebar toggleNightMode={toggleNightMode} currentUser={user} toggleClick={toggleHandler} sidebarClick={() => { headerHandler(null) }}  />
        <div className="main_content">
            <Header currentUser={user} toggleClick={toggleHandler} showHeaderItems={showHeaderItems} headerClick={(currentKey) => headerHandler(currentKey)} >
            </Header>
            <Explore nightMode={nightMode} contentClick={contentHandler} ></Explore>
        </div>
    </div>
    )
}

export default Layout