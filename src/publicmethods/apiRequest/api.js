import request from '../../plugin/axios/axiosConfig' // 引入插件文件夹中axios的请求

/**
 * 统一封装全局HTTP请求公用接口
 */

export function GetHttp(URL, DATA) {
    return request({
        url: URL,
        method: 'get',
        data: DATA
    })
}

// GET请求，URL传参
export function GetUrlHttp(URL, PARAMS) {
    return request({
        url: URL,
        method: 'get',
        params: PARAMS
    })
}

export function PostHttp(URL, DATA) {
    return request({
        url: URL,
        method: 'post',
        data: DATA
    })
}
