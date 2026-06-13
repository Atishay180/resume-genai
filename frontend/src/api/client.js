import axios from "axios";

// Axios client:
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
});

// Request Interceptor:
apiClient.interceptors.request.use(
    (config) => {
        if (config.data instanceof FormData) {
            delete config.headers["Content-Type"];
        } else if (!config.headers["Content-Type"]) {
            config.headers["Content-Type"] = "application/json";
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

// Response Interceptor: 
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // If backend returns 401 Unauthorized, the cookie is likely expired or invalid
        if (error.response && error.response.status === 401) {
            console.warn('Session expired or unauthorized. Redirecting to login...');

            // Professional Touch: Avoid window.location.href if using React Router.
            // Instead, clear any localized client state (like a Zustand/Redux auth state) 
            // and let your protected route components automatically redirect the user.
        }
        return Promise.reject(error);
    }
)

export default apiClient;