import axiosClient from "./intercepter";


const httpHandler = {
    get: (url, params) =>
        axiosClient.get(url, { params }).then(res => res.data),
    post: (url, data) =>
        axiosClient.post(url, data).then(res => res.data),
};

export default httpHandler;