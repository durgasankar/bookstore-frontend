import axios from "axios";
import { validateResponse } from "./responseValidator";

const setupInterceptors = axiosInstance => {
    // axiosInstance.interceptors.request.use(
    //     (config) => {
    //         const token = localStorage.getItem("token");
    //         if (token) {
    //             config.headers.Authorization = `Bearer ${token}`;
    //         }
    //         return config;
    //     },
    //     (error) => Promise.reject(error)
    // );

    axiosInstance.interceptors.response.use(
        (response) => {
            response.data = validateResponse(response.data);
            return response;
        },
        (error) => {
            if (error.response) {
                if (error.response.status === 401) {
                    console.error("Unauthorized - Login required");
                }
                return Promise.reject(error.response.data);
            }
            return Promise.reject(error);
        }
    );
};


const axiosClient = axios.create({
    // baseURL: process.env.REACT_APP_API_BASE_URL,
    baseURL: 'http://localhost:5000/api',
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
    },
});
setupInterceptors(axiosClient);

export default axiosClient;