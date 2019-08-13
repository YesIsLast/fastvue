import Vue from 'vue'
import VueProgressBar from 'vue-progressbar' // vue顶部的轻量级进度条
import VueProgressBarOption from '../vueprogressbar.config' //引入进度条配置
import App from './App.vue'
import router from './router'
import store from './store' // 全局状态管理库
import Components from './components/index' // 公用组件封装库
import Antd from 'ant-design-vue' // 引入组件库
import 'ant-design-vue/dist/antd.css'
// import "./plugin/mock/index"; // 引入mockjs模拟接口
import axios from 'axios' // ajax请求插件
import Request from './plugin/axios/axios' // 请求封装

/**VUE全局配置 */
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
// 定义全局键盘事件
Vue.config.keyCodes = {
  "enter": 13
}
// 进度条动画
Vue.use(VueProgressBar, VueProgressBarOption)
// 组件库
Vue.use(Antd)
// 注册组件
Vue.use(Components)
// 请求封装
Vue.use(Request)
// 添加实例方法, 使用基于Promise的HTTP请求插件
Vue.prototype.axios = axios;

// 创建一个Vue实例，挂载到App.vue上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
