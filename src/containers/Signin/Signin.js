import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"
import { resources } from "../../resource";
import { AuthContext } from "../../context/auth-context";
import TextInput from "../../components/UI/TextInput/TextInput ";

import NotificationProvider from "../../components/UI/Notification/Notification";

const Signin = () => {

    const authContext = useContext(AuthContext)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({

            email: Yup.string().required(resources.SIGNIN.INPUT_REQUIRED_EMAIL)
                .max(255, resources.SIGNIN.INPUT_MAX_EMAIL)
                .min(5, resources.SIGNIN.INPUT_MIN_EMAIL),

            password: Yup.string().required(resources.SIGNIN.INPUT_REQUIRED_PASSWORD)
                .max(32, resources.SIGNIN.INPUT_MAX_PASSWORD)
                .min(5, resources.SIGNIN.INPUT_MIN_PASSWORD)

        }),
        onSubmit: (values) => {
            authContext.onAuthentication({ email: values.email, password: values.password })
                .then((response) => {
                    if (!response.isSuccess) {
                        NotificationProvider(response.message, response.type)
                    }
                })
        }
    })

    return (<>
        <h1 className="lg:text-3xl text-xl font-semibold  mb-6">{resources.SIGNIN.HEADING_SIGNIN}</h1>
        <p className="mb-2 text-black text-lg">{resources.SIGNIN.INFO_SIGNIN}</p>
        <form action="form-signin.html" onSubmit={formik.handleSubmit} >
            <input type="text" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder={resources.SIGNIN.INPUT_PLACEHOLDER_EMAIL} className="bg-gray-200 shadow-none dark:bg-gray-800" style={{ border: "1px solid #d3d5d8" }} autoComplete="off" />
            {formik.touched.email && formik.errors.email ? <span className='error-message'>{formik.errors.email}</span> : null}

            <div className="mb-2"></div>
            <div className="password-wrapper">
                <TextInput type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder={resources.SIGNIN.INPUT_PLACEHOLDER_PASS} className="bg-gray-200 shadow-none dark:bg-gray-800" style={{ border: "1px solid #d3d5d8" }} autoComplete="off" />
            </div>
            {formik.touched.password && formik.errors.password ? <span className='error-message'>{formik.errors.password}</span> : null}

            <div className="my-4" style={{ textAlign: "right" }}>
                <a href="form-signin.html#">{resources.SIGNIN.FORGETpASSWORD_TAG}</a>
            </div>
            <button type="submit" className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">{resources.SIGNIN.BUTTON_TEXT}</button>
            <div className="text-center mt-5 space-x-2">
                <p className="text-base"> {resources.SIGNIN.NOT_REGISTERD} <a href="form-register.html" className=""> {resources.SIGNIN.CREATE_ACCOUNT} </a></p>
            </div>
        </form></>)

}

export default Signin