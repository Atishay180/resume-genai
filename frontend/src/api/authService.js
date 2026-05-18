import apiClient from "./client"

export const authService = {
    getMe: async () => {
        const response = await apiClient.get("/auth/get-me");
        return response.data;
    },

    logout: async () => {
        const response = await apiClient.post("/auth/logout");
        return response.data;
    },

    login: async (userData) => {
        const response = await apiClient.post("/auth/login", userData);
        return response.data;
    },

    register: async (userData) => {
        const response = await apiClient.post("/auth/register", userData);
        return response.data;
    },
}