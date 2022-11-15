import axios from 'axios';
import config from '../../config'

/**
 * axios 二次封装
 */
class HttpRequest {
    // 构造器
    constructor(url) {
        this.url = url;
    }

    // 拦截器
    interceptors(instance) {
        // 请求拦截器
        instance.interceptors.request.use(config => {
            return config;
        }, error => {
            return Promise.reject(error);
        }
        );
        // 响应拦截器
        instance.interceptors.response.use(response => {
            return response;
        }, error => {
            return Promise.reject(error);
        }
        );
    }

    request(options) {
        const instance = axios.create({
            baseURL: this.url,
            header: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        this.interceptors(instance);
        return instance(options);
    }

}

const baseUrl = process.env.NODE_ENV === 'production' ? config.api.production : config.api.development;
export default new HttpRequest(baseUrl);
