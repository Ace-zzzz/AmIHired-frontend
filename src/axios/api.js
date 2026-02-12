import axios from "axios";
import camelcaseKeys from 'camelcase-keys';

// CREATE REUSABLE AXIOS INSTANCE
const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type" : "application/json"
    }
});

api.interceptors.request.use(
    /**
     * RUN EVERY REQUEST TO
     * VALIDATE THE TOKEN 
     * THEN MODIFIED IT
     **/
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    },
    /**
     * RUN IF THERE'S AN
     * ERROR BEFORE PROCEEDING
     **/
    (error) => {
        return Promise.reject(error);
    }
);

// 3. RESPONSE INTERCEPTOR (The Translator)
api.interceptors.response.use(
    (response) => {
        // Use .includes to be safe with charsets
        const contentType = response.headers['content-type'] || '';
        
        if (response.data && contentType.includes('application/json')) {
            // { deep: true } ensures nested objects are also converted
            response.data = camelcaseKeys(response.data, { deep: true });
        }
        return response;
    },
    (error) => {
        // You can also handle global 401 (Unauthorized) errors here!
        if (error.response?.status === 401) {
            console.warn("Token expired or invalid");
            // localStorage.removeItem("token");
            // window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default api;