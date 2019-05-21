import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

// 创建一个Vue实例，挂载到App.vue上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
