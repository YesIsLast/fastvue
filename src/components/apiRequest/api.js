import request from '../../plugin/axios/axiosConfig' // 引入插件文件夹中axios的请求
/*
  登录界面相关接口
  存放与后台连接的接口以及请求方式和参数
*/
export function loginsub() {
    var urlplus = 'api/user/login.do'
    return request({
        url: urlplus,
        method: 'post',
        // 此处请求时，get方法使用params传参，post方法使用data传参
        data: {
            username: 'admin',
            password: 'admin'
        }
    })
}
export function logingeturl(username, password) {
    var resurl = '/' + username + '/' + password
    return request({
        url: 'api/getuser/login.do' + resurl,
        method: 'get'// 如果使用get方法，将参数放置到URL中可以使用拼接字符串，如果不写请求方式默认就是GET
    })
}
// 测试前后台连接是否存在问题
export function testget() {
    var resurl = '/' + 'root' + '/' + 'admin'
    return request({
        url: 'api/logintow.do' + resurl
    })
}
