import axios from "axios";

let service = axios.create({  // service其实就是对axios的一个封装
    baseURL: "http://localhost:3000",
    timeout: 3000,
})

export default service