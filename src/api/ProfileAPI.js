
import axios from "../Axios"
import getCookie from "../utilities/getCookie"

export const GetUserInfo = async (signal) => {
    let jsonData;
    await axios.get(`InstelloDb-01/users?id=${getCookie('uId')}`, signal).then((response) => {
        if (response.status === 200 && response.data.length > 0) {
            jsonData = { isSuccess: true, type: "success", entity: response.data[0] }
        }
        else {
            jsonData = { isSuccess: false, type: "danger" }
        }
    }).catch(error => {
        if (error.code === 'ERR_CANCELED') console.log(error);
        jsonData = { isSuccess: false, message: "error", type: "danger" }
    })

    return jsonData
}


