import axios from "axios";

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

export default api;