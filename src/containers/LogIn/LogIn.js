import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"
import { resources } from "../../resource";
import { AuthContext } from "../../context/auth-context";

const Login = () => {

    const authContext = useContext(AuthContext)

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({

            username: Yup.string().required(resources.LOGIN.INPUT_REQUIRED_USERNAME)
                .max(255, resources.LOGIN.INPUT_MAX_USERNAME)
                .min(5, resources.LOGIN.INPUT_MIN_USERNAME),

            password: Yup.string().required(resources.LOGIN.INPUT_REQUIRED_PASSWORD)
                .max(32, resources.LOGIN.INPUT_MAX_PASSWORD)
                .min(5, resources.LOGIN.INPUT_MIN_PASSWORD)

        }),
        onSubmit: (values) => {
            authContext.onAuthentication({ username: values.username, password: values.password })
            .then((response)=>{
                if (!response.isSuccess) {
                    alert(response.message)
                }
            })
        }
    })

    return (<>
        <h1 className="lg:text-3xl text-xl font-semibold  mb-6">{resources.LOGIN.HEADING_LOGIN}</h1>
        <p className="mb-2 text-black text-lg">{resources.LOGIN.INFO_LOGIN}</p>
        <form action="form-login.html" onSubmit={formik.handleSubmit} >
            <input type="text" name="username" id="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder={resources.LOGIN.INPUT_PLACEHOLDER_USERNAME} className="bg-gray-200 shadow-none dark:bg-gray-800" style={{ border: "1px solid #d3d5d8" }} autoComplete="off" />
            {formik.touched.username && formik.errors.username ? <span className='error-message'>{formik.errors.username}</span> : null}

            <div className="mb-2"></div>
            <input type="text" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder={resources.LOGIN.INPUT_PLACEHOLDER_PASS} className="bg-gray-200 shadow-none dark:bg-gray-800" style={{ border: "1px solid #d3d5d8" }} autoComplete="off" />
            {formik.touched.password && formik.errors.password ? <span className='error-message'>{formik.errors.password}</span> : null}

            <div className="my-4" style={{ textAlign: "right" }}>
                <a href="form-login.html#">{resources.LOGIN.FORGETpASSWORD_TAG}</a>
            </div>
            <button type="submit" className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">{resources.LOGIN.BUTTON_TEXT}</button>
            <div className="text-center mt-5 space-x-2">
                <p className="text-base"> {resources.LOGIN.NOT_REGISTERD} <a href="form-register.html" className=""> {resources.LOGIN.CREATE_ACCOUNT} </a></p>
            </div>
        </form></>)

}

export default Login