import axios from "axios";

// Axios client:
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
});

// Request Interceptor:
apiClient.interceptors.request.use(
    (config) => {
        // If you need to add custom trace headers or device IDs later, do it here.
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