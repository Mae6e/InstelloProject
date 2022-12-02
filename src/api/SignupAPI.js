import Axios from "../Axios"
import { resources } from "../resource"

const SignupAPI = async (user) => {
    let jsonData;
    await Axios.post(`/users` , user)
        .then((response) => {
            if (response.status === 201) {
                jsonData = { isSuccess: true, message: resources.SIGNUP.SUCCESS_SIGNUP, type: "success" }
            }
            else {
                jsonData = { isSuccess: false, message: resources.SIGNUP.ERROR_SIGNUP, type: "danger" }
            }
        })
        .catch((error) => {
            console.log(error);
            jsonData = { isSuccess: false, message: "error", type: "danger" }
        })
    return jsonData
}

export default SignupAPI