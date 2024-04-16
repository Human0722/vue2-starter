import axios from 'axios';
import config from "../../config";
import router from "@/router";

const http = axios.create({
    baseURL: config.api.development,
    timeout: 10000,
});

http.interceptors.request.use(
    function(config) {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.common['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            router.push('/login');
        }
        return Promise.reject(error);
    }
);

export default {
    install: function(Vue) {
        Vue.prototype.$http = http;
    },
};