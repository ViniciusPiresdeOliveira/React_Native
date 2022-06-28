import axios from "axios";

const AxiosInstance = axios.create({
    baseURL:"http://localhost:8080/comercioseguro",
});

export default AxiosInstance;