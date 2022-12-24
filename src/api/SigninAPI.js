import Axios from "../Axios"
import { resources } from "../resource"

const SigninAPI = async (user,signal) => {
    let jsonData;
    await Axios.get(`InstelloDb-01/users?email=${user.email}&&password=${user.password}`,signal)
        .then((response) => {
            if (response.status === 200 && response.data.length > 0) {
                jsonData = { isSuccess: true, message: resources.SIGNIN.SUCCESS_SIGNIN, type: "success" , entity:response.data[0] }
            }
            else {
                jsonData = { isSuccess: false, message: resources.SIGNIN.ERROR_SIGNIN, type: "danger" }
            }
        })
        .catch((error) => {
            if(error.code === 'ERR_CANCELED') console.log(error);
            jsonData = { isSuccess: false, message: "error", type: "danger" }
        })
    return jsonData
}

export default SigninAPI