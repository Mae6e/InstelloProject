import axios from "../Axios"

export const GetNotifications = async() => {

    let jsonData
    await axios.get('/notifications')
        .then((response) => {
            if (response.status === 200 && response.data.length > 0) {
                jsonData = { isSuccess: true, type: "success", entity: response.data }
            }
            else {
                jsonData = { isSuccess: false, type: "danger" }
            }
        }).catch((error) => {
            console.log(error)
            jsonData = { isSuccess: false, type: "danger" }

        })

    return jsonData
}