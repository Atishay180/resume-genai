import apiClient from "./client"

export const userService = {
    interviewReport: async (userData) => {
        const response = await apiClient.post("interview/report", userData);
        return response.data;
    },

    getInterviewReportById: async (interviewId) => {
        const response = await apiClient.get(`interview/report/${interviewId}`);
        return response.data;
    },

    getAllInterviewReports: async () => {
        const response = await apiClient.get("interview/reports");
        return response.data;
    }
}
