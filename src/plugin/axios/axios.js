import axios from 'axios' // AJAX请求插件
/**
 * 存储有关axios的请求配置
 */

 // 默认请求地址

const AJAXbaseURL = 'http://localhost:8001/api';// 默认请求地址
// 创建一个AXIOS实例的常量，禁止发生改变
// Set config defaults when creating the instance
// 创建自定义axios实例
const axiosRequest = axios.create({
    // `baseURL` will be prepended to `url` unless `url` is absolute.
    // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
    // to methods of that instance.
    baseURL: AJAXbaseURL,// 默认请求地址
    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: 1000, // default is `0` (no timeout)
    // `responseType` indicates the type of data that the server will respond with
    // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // default
    // `responseEncoding` indicates encoding to use for decoding responses
    // Note: Ignored for `responseType` of 'stream' or client-side requests
    responseEncoding: 'utf8', // default
});

// Add a request interceptor
// 请求拦截器
axiosRequest.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Content-Type'] = 'application/json'
    config.headers['Access-Control-Allow-Origin'] = '*'
    return config;
}, function (error) {
    // Do something with request error
    // 请求失败处理
    return Promise.reject(error);
});

// Add a response interceptor
// 响应拦截器
axiosRequest.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // 响应失败处理
    // Do something with response error
    return Promise.reject(error);
});

export default {
    install: function (Vue) {
        Vue.prototype.$request = function (config) {
            return axiosRequest.request(config)
        }
        // 封装get请求
        Vue.prototype.$get = function (url, param) {
            if (typeof param === 'object' && param != undefined) {
                let config = { method: 'get', url: url, params: param }
                return this.$request(config);
            } else {
                let config = { method: 'get', url: url }
                return this.$request(config);
            }
        }
        // 封装post请求
        Vue.prototype.$post = function (url, param) {
            let config = { method: 'post', url: url, data: param }
            console.log(config)
            return this.$request(config)
        }
    }
}
