/**
 * 第一菜单栏 子路由集合
 */
import firstMenuSecondChildComponent from '../../views/firstmenuComponent/firstMenuFirstChildComponent/firstMenuSecondChildComponent.vue'

// 所有第一菜单栏的单页面的路由全部集合在这
const routers = [
    // 此处重定向写法重定向到当前路由下配置
    {
        path: '/', redirect: 'firstMenuFirstChildComponent'	// 默认配置成重定向第一页
    },
      // 当 /main/firstmenuComponent/firstMenuFirstChildComponent 匹配成功，
      // firstMenuFirstChildComponent 会被渲染在 firstmenuComponent 的 <router-view> 中
    {
        path: 'firstMenuFirstChildComponent',
        name: 'firstMenuFirstChildComponent',
        meta: { title: '第一菜单第一页' },
        component: () =>
            import('@/views/firstmenuComponent/firstMenuFirstChildComponent/firstMenuFirstChildComponent.vue')
    },
    {
        path: 'firstMenuSecondChildComponent',
        name: 'firstMenuSecondChildComponent',
        meta: { title: '第一菜单第二页' },
        component: firstMenuSecondChildComponent
    }

]

export default routers
