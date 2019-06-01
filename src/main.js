import Vue from 'vue'
import VueProgressBar from 'vue-progressbar' // vue顶部的轻量级进度条
import App from './App.vue'
import router from './router' 
import store from './store' // 全局状态管理库
import axios from 'axios' // AJAX请求插件
import Components from './components/index' // 公用组件封装库

// 全局注册组件
Vue.use(Components)
// 定义常量配置VueProgressBar所需要参数配置
const options = {
  color: '#3eb1fc',
  failedColor: 'red',
  thickness: '20px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
// 全局使用进度条动画
Vue.use(VueProgressBar, options)



// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

// 创建一个Vue实例，挂载到App.vue上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
