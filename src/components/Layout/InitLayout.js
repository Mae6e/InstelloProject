import React from "react"

import './style.css'
import './tailwind.css'
import './icons.css'

const InitLayout = (props) => {
    return (<div className="bg-gray-100">
        <div id="wrapper" className="flex flex-col justify-between h-screen">
            <div className="bg-white py-4 shadow dark:bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center lg:justify-between justify-around">

                        <a href="trending.html">
                            <img src="assets/images/logo.png" alt="" className="w-32" />
                        </a>

                        <div className="capitalize flex font-semibold hidden lg:block my-2 space-x-3 text-center text-sm">
                            <a href="form-login.html" className="py-3 px-4">Login</a>
                            <a href="form-register.html" className="bg-pink-500 pink-500 px-6 py-3 rounded-md shadow text-white">Register</a>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <div className="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
                    {props.children}
                </div>
            </div>

            <div className="lg:mb-5 py-3 uk-link-reset">
                <div className="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3">
                    <div className="flex space-x-2 text-gray-700 uppercase">
                        <a href="form-login.html#"> About</a>
                        <a href="form-login.html#"> Help</a>
                        <a href="form-login.html#"> Terms</a>
                        <a href="form-login.html#"> Privacy</a>
                    </div>
                    <p className="capitalize"> © copyright 2020 by Instello</p>
                </div>
            </div>

        </div>
    </div>
    )
}

export default InitLayout