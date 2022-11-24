import Axios from "../Axios"
import { resources } from "../resource"

const SigninAPI = async (user) => {
    let jsonData;
    await Axios.get(`/users?email=${user.email}&&password=${user.password}`)
        .then((response) => {
            if (response.status === 200 && response.data.length > 0) {
                jsonData = { isSuccess: true, message: resources.SIGNIN.SUCCESS_SIGNIN, type: "success" }
            }
            else {
                jsonData = { isSuccess: false, message: resources.SIGNIN.ERROR_SIGNIN, type: "danger" }
            }
        })
        .catch((error) => {
            console.log(error);
            jsonData = { isSuccess: false, message: error, type: "danger" }
        })
    return jsonData
}

export default SigninAPI