import React from "react"
import { resources } from "../../resource"
import NotificationBox from "../NotificationBox/NotificationBox"

import logo from "../../assets/images/logo-mobile.png"
import lightLogo from "../../assets/images/logo-mobile-light.png"
import MessageBox from "../MessageBox/MessageBox"
import avator from "../../assets/images/avatars/blank-profile.webp"

const Header = (props) => {

    const profileHandler = (key) => {
        props.headerClick(key)
    }

    let content = {
        showProfile: props.showHeaderItems.isShowProfile ?
            <div uk-drop="mode: click;offset:9" className="header_dropdown profile_dropdown border-t uk-drop uk-open" style={{ left: "2%", top: "1.5%" }}>
                <ul>
                    <li><a href="#"> {resources.HEADER.ACCOUNT_SETTING} </a> </li>
                    <li><a href="form-login.html"> {resources.HEADER.LOGOUT}</a></li>
                </ul>
            </div> : null,
        showMessage: props.showHeaderItems.isShowMessage ? <MessageBox nightMode={props.nightMode} /> : null,
        showNotification: props.showHeaderItems.isShowNotification ? <NotificationBox nightMode={props.nightMode} /> : null
    }

    return (<header>
        <div className="header_inner">
            <div className="right-side">
                <div id="logo" className=" uk-hidden@s">
                    <a href="http://demo.foxthemes.net/instellohtml/home.html">
                        <img src={logo} loading="lazy" alt="" />
                        <img src={lightLogo} loading="lazy" className="logo_inverse" />
                    </a>
                </div>

                <div className="triger" onClick={props.toggleClick} uk-toggle="target: #wrapper ; cls: sidebar-active">
                    <i className="uil-bars"></i>
                </div>

                <div className="header_search">
                    <input type="text" placeholder={resources.HEADER.SEARCH} />
                    <div className="icon-search">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

            </div>
            <div className="left-side lg:pr-4">
                <a href="trending.html#"
                    className="bg-pink-500 flex font-bold hidden hover:bg-pink-600 hover:text-white inline-block items-center lg:block max-h-10 ml-4 px-4 py-2 rounded shado text-white">
                    <i name="add-circle" className="uil-upload"></i> {resources.HEADER.UPLOAD}
                </a>
                <div uk-dropdown="pos: top-right;mode:click ; animation: uk-animation-slide-bottom-small" className="header_dropdown">
                    <div className="px-4 py-3 -mx-5 -mt-4 mb-5 border-b">
                        <h4>Upload Video</h4>
                    </div>
                    <div className="flex justify-center flex-center text-center dark:text-gray-300">

                        <div className="flex flex-col choose-upload text-center">

                            <div className="bg-gray-100 border-2 border-dashed flex flex-col h-24 items-center justify-center relative w-full rounded-lg dark:bg-gray-800 dark:border-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12">
                                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                                    <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                                </svg>
                            </div>

                            <p className="my-3 leading-6"> Do you have a video wants to share us <br /> please upload her ..
                            </p>
                            <div>
                                <input type="file" />
                                <a href="trending.html#" className="button soft-warning small"> Choose file</a>
                            </div>

                            <a href="trending.html#" className="uk-text-muted mt-3 uk-link"
                                uk-toggle="target: .choose-upload ;  animation: uk-animation-slide-right-small, uk-animation-slide-left-medium; queued: true">
                                Or Import Video </a>
                        </div>

                        <div className="uk-flex uk-flex-column choose-upload" hidden>
                            <div className="mx-auto flex flex-col h-24 items-center justify-center relative w-full rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12">
                                    <path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="my-3 leading-6"> Import videos from YouTube <br /> Copy / Paste your video link here </p>
                            <form className="uk-grid-small" >
                                <div className="uk-width-expand">
                                    <input type="text" className="uk-input uk-form-small  bg-gray-200 dark:bg-gray-700" style={{ boxShadow: "none" }} placeholder="Paste link" />
                                </div>
                                <div className="uk-width-auto"> <button type="submit" className="button soft-warning -ml-2">
                                    Import </button> </div>
                            </form>
                            <a href="trending.html#" className="uk-text-muted mt-3 uk-link"
                                uk-toggle="target: .choose-upload ; animation: uk-animation-slide-left-small, uk-animation-slide-right-medium; queued: true">
                                Or Upload Video </a>
                        </div>

                    </div>
                    <div className="px-4 py-3 -mx-5 -mb-4 mt-5 border-t text-sm dark:border-gray-500 dark:text-gray-500">
                        Your Video size Must be Maxmium 999MB
                    </div>
                </div>

                <button className="header-links-item" onClick={() => profileHandler('isShowNotification')} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
                {content["showNotification"]}

                <button className="header-links-item" onClick={() => profileHandler('isShowMessage')} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                </button>
                {content["showMessage"]}

                <button onClick={() => profileHandler('isShowProfile')}>
                    <img src={props.currentUser.image?? avator} loading="lazy" className="header-avatar" alt="" />
                </button>
                {content["showProfile"]}

            </div>
        </div>
    </header>)
}

export default Header