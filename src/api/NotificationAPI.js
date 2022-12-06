import axios from "../Axios"

export const GetNotifications = async(signal) => {

    let jsonData
    await axios.get('/notifications',signal)
        .then((response) => {
            if (response.status === 200 && response.data.length > 0) {
                jsonData = { isSuccess: true, type: "success", entity: response.data }
            }
            else {
                jsonData = { isSuccess: false, type: "danger" }
            }
        }).catch((error) => {
            if(error.code === 'ERR_CANCELED') console.log(error);
            jsonData = { isSuccess: false, message: "error", type: "danger" }

        })

    return jsonData
}