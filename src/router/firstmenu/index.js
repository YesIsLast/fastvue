/**
 * 第一菜单栏 子路由集合
 */
import firstMenuSecondChildComponent from '../../views/firstmenuComponent/firstMenuFirstChildComponent/firstMenuSecondChildComponent.vue'

// 所有第一菜单栏的单页面的路由全部集合在这
const routers = [
    {
        path: '/', redirect: '/firstMenuFirstChildComponent'	// 默认配置成重定向第一页
    },
    {
        path: '/firstMenuFirstChildComponent',
        name: 'firstMenuFirstChildComponent',
        meta: { title: '第一菜单第一页' },
        component: () =>
            import('@/views/firstmenuComponent/firstMenuFirstChildComponent/firstMenuFirstChildComponent.vue')
    },
    {
        path: '/firstMenuSecondChildComponent',
        name: 'firstMenuSecondChildComponent',
        meta: { title: '第一菜单第二页' },
        component: firstMenuSecondChildComponent
    }

]

export default routers
