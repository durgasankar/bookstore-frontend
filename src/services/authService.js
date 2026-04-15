import httpHandler from "../utils/HttpHandler";


export const registerUser = (payload) => {
    return httpHandler.post("/users/register", payload);
};