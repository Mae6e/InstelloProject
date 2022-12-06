import axios from "axios";

export const CancelToken = axios.CancelToken;

const Axios = axios.create({
    baseURL:"https://my-json-server.typicode.com/maede71/InstelloDb",
   // CancelToken,
})

export default Axios