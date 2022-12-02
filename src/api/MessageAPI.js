import axios from "../Axios";

export const GetMessages = async () => {
    let jsonData;
    await axios.get('/messages')
        .then(response => {
            if (response.status === 200 && response.data.length > 0) {
                jsonData = { isSuccess: true, type: "success", entity: response.data }
            }
            else {
                jsonData = { isSuccess: false, type: "danger" }
            }
        }).catch(error => {
            console.log(error);
            jsonData = { isSuccess: false, message: "error", type: "danger" }
        })

        return jsonData;
}
