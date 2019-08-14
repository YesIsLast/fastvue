import Vue from 'vue'
import VueRouter from 'vue-router'
import logincomponent from './views/Login/login.vue'

// 第一栏菜单子路由
import firstmenuRouters from './router/firstmenu/index' // 相关子路由
const firstmenuComponent = resolve => require(['@/views/firstmenuComponent/firstmenuComponent.vue'], resolve)
// 第二栏菜单子路由
import secondmenuRouters from './router/secondmenu/index' // 相关子路由
const secondmenuComponent = resolve => require(['@/views/secondmenuComponent/secondmenuComponent.vue'], resolve)

import homepage from './views/Home/homePage.vue'
import main from './views/main.vue'
import firstMenuFirstChildComponent from './views/firstmenuComponent/firstMenuFirstChildComponent/firstMenuFirstChildComponent.vue'
import Page_404 from './views/ERR_Pages/Page_404.vue'
import demoPage from './views/Demo/demo.vue'

// 全局注册vue-router
Vue.use(VueRouter)

const routes = [
  // 默认重定向登录路由
  {
    path: '/', redirect: '/login'
  },
  {
    path: '*', component: Page_404
  },
  {
    path: '/login',
    name: 'login',
    component: logincomponent
  },
  {
    path: '/demo',
    name: 'demo',
    component: demoPage,
  },
  {
    path: '/404', name: 'Page_404-404', component: Page_404
  },
  // 使用箭头符号来对组件进行注册，免去上方引入
  {
    path: '/main',
    name: 'main',
    component: main,
    // 使用路由集合
    children: [
      {
        path: '/',
        redirect: '/404' // 默认配置成重定向登录页
      },
      {
        path: '/homePage',
        name: 'homepage',
        component: homepage,
      },
      // 当 /main/firstmenuComponent 匹配成功，
      // firstmenuComponent 会被渲染在 main 的 <router-view> 中
      {
        path: 'firstmenuComponent',
        name: 'firstmenuComponent',
        component: firstmenuComponent,
        meta: { title: '第一菜单栏' },
        children: [
          ...firstmenuRouters
        ]
      },
      {
        path: 'secondmenuComponent',
        name: 'secondmenuComponent',
        component: secondmenuComponent,
        meta: { title: '第二菜单栏' },
        children: [
          ...secondmenuRouters
        ]
      }
    ]
  },
]


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  // 如果不想要很丑的 hash，我们可以用路由的 history 模式
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})

// // 导出路由配置
export default router
