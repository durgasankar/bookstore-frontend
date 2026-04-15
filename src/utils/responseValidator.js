export const validateResponse = response => {
    console.log(response);
    if (!response) {
        throw new Error("No response received from server");
    }
    return response;
};