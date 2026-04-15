import httpHandler from "../utils/HttpHandler";

export const registerUserApi = payload => {
    return httpHandler.post("/users/register", payload);
};

export const loginUserApi = payload => {
    return httpHandler.post("/users/login", payload);
}