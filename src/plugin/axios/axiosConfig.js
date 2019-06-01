import axios from 'axios'
/**
 * 存储有关axios的请求配置
 */

// 创建一个AXIOS实例的常量，禁止发生改变
var axiosService = axios.create({
    // axios请求地址
    // baseURL: 'http://39.96.89.11:8080/springbootd2/',
    baseURL: '',
    // axios请求超时
    timeout: 5000
});

// 添加请求拦截器
axiosService.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers['Content-Type'] = 'application/json'
    config.headers['Access-Control-Allow-Origin'] = '*'
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axiosService.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default axiosService