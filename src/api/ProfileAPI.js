
import axios from "../Axios"
import getCookie from "../utilities/getCookie"

export const GetUserInfo = async () => {
    let jsonData;
    await axios.get(`/users?id=${getCookie('uId')}`).then((response) => {
        if (response.status === 200 && response.data.length > 0) {
            jsonData = { isSuccess: true,  type: "success" , entity:response.data[0] }
        }
        else {
            jsonData = { isSuccess: false, type: "danger" }
        }
    }).catch(error => {
        console.log(error);
        jsonData = { isSuccess: false, message: "error", type: "danger" }
    })

    return jsonData
}


