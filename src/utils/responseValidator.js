export const validateResponse = response => {
    if (!response) {
        throw new Error("No response received from server");
    }
    if (typeof response.success !== "boolean") {
        throw new Error("Invalid API response structure");
    }
    if (!response.success) {
        throw new Error(response.message || "API request failed");
    }
    return response;
};