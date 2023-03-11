import axios from 'axios'
import { store } from '../redux/Store'

const instance = axios.create({
    baseURL: 'http://localhost/',
    timeout: 3000,
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    const {
        auth: { access_token },
    } = store.getState()
    // Do something before request is sent
    if (access_token) {
        config.headers["Authorization"] = "Bearer " + access_token;
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error && error.response.data ? Promise.reject(error.response.data) : Promise.reject(error);
});

export default instance
