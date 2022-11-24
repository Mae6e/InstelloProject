import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"
import { resources } from "../../resource";
import SignupAPI from "../../api/SignupAPI"

import NotificationProvider from "../../components/UI/Notification/Notification";

import TextInput from "../../components/UI/TextInput/TextInput ";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {

    const [enableSignupButton, setSignupButton] = useState(true);


    const CreateUUID=()=> {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmpassword: '',
            firstname: '',
            lastname: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required(resources.SIGNUP.INPUT_REQUIRED).min(5, resources.SIGNUP.INPUT_MIN_EMAIL).max(255, resources.SIGNUP.INPUT_MAX_EMAIL),
            password: Yup.string().required(resources.SIGNUP.INPUT_REQUIRED).min(5, resources.SIGNUP.INPUT_MIN_PASSWORD).max(32, resources.SIGNUP.INPUT_MAX_PASSWORD),
            confirmpassword: Yup.string().required(resources.SIGNUP.INPUT_REQUIRED).oneOf([Yup.ref('password')], resources.SIGNUP.INPUT_MATCH_CONFIRMPASSWORD),
            firstname: Yup.string().required(resources.SIGNUP.INPUT_REQUIRED).min(3, resources.SIGNUP.INPUT_MIN_FIRSTNAME).max(50, resources.SIGNUP.INPUT_MAX_FIRSTNAME),
            lastname: Yup.string().required(resources.SIGNUP.INPUT_REQUIRED).min(3, resources.SIGNUP.INPUT_MIN_LASTNAME).max(100, resources.SIGNUP.INPUT_MAX_LASTNAME),
        }),
        onSubmit: (values) => {
            SignupAPI({id:CreateUUID() , ...values}).then((response) => {
                NotificationProvider(response.message, response.type)
            })
        }
    })

    const cconfirmConditionHandler = () => {
        setSignupButton(!enableSignupButton)
    }

    return (<><h1 className="lg:text-3xl text-xl font-semibold mb-6">{resources.SIGNUP.HEADING_SIGNUP}</h1>
        <p className="mb-2 text-black text-lg">{resources.SIGNUP.INFO_SIGNUP}</p>
        <form action="form-register.html" onSubmit={formik.handleSubmit}>
            <div className="flex lg:flex-row flex-col lg:space-x-2">
                <div>
                    <input type="text" name="firstname" id="firstname" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder={resources.SIGNUP.INPUT_FIRSTNAME} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: "1px solid #d3d5d8" }} autoComplete="off" />
                    {formik.touched.firstname && formik.errors.firstname ? <span className='error-message'>{formik.errors.firstname}</span> : null}
                </div>
                <div>
                    <input type="text" name="lastname" id="lastname" value={formik.values.lastname} placeholder={resources.SIGNUP.INPUT_LASTNAME} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: "1px solid #d3d5d8" }} autoComplete="off" />
                    {formik.touched.lastname && formik.errors.lastname ? <span className='error-message'>{formik.errors.lastname}</span> : null}
                </div>
            </div>
            <input type="text" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder={resources.SIGNUP.INPUT_EMAIL} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: "1px solid #d3d5d8" }} autoComplete="off" />
            {formik.touched.email && formik.errors.email ? <span className='error-message'>{formik.errors.email}</span> : null}

            <div className="password-wrapper">
                <TextInput type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder={resources.SIGNUP.INPUT_PASSWORD} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: "1px solid #d3d5d8" }} autoComplete="off" />
            </div>
            {formik.touched.password && formik.errors.password ? <span className='error-message'>{formik.errors.password}</span> : null}

            <div className="password-wrapper">
                <TextInput type="password" name="confirmpassword" value={formik.values.confirmpassword} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder={resources.SIGNUP.INPUT_CONFIRMPASSWORD} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: "1px solid #d3d5d8" }} autoComplete="off" />
            </div>
            {formik.touched.confirmpassword && formik.errors.confirmpassword ? <span className='error-message'>{formik.errors.confirmpassword}</span> : null}

            <div className="flex justify-start my-4 space-x-1">
                <div className="checkbox">
                    <input type="checkbox" id="chekcbox1" defaultChecked={false} onChange={cconfirmConditionHandler} />
                    <label htmlFor="chekcbox1"><span className="checkbox-icon"></span> {resources.SIGNUP.I_AGREE}</label>
                </div>
                <a href="form-register.html#" className="txt-condition"> <span>{resources.SIGNUP.TERMS_AND_CONDITIONS}</span></a>
            </div>
            <button type="submit" disabled={enableSignupButton} className={`bg-gradient-to-br ${enableSignupButton ? "disabled-button" : "from-pink-500"} py-3 rounded-md text-white text-xl to-red-400 w-full`} >{resources.SIGNUP.BUTTON_TEXT}</button>
            <div className="text-center mt-5 space-x-2">
                <p className="text-base"> {resources.SIGNUP.HAS_ACCOUNT} <a href="form-login.html"> {resources.SIGNUP.SIGNIN_ACCOUNT} </a></p>
            </div>
        </form></>)

}

export default Signup