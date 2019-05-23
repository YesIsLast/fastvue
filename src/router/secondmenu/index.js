/**
 * 第一菜单栏 子路由集合
 */
import secondMenuSecondChildComponent from '../../views/secondmenuComponent/secondMenuSecondChildComponent/secondMenuSecondChildComponent.vue'

// 所有第一菜单栏的单页面的路由全部集合在这
const routers = [
    {
        path: '/', redirect: 'secondMenuFirstChildComponent'	// 默认配置成重定向第一页
    },
    {
        path: 'secondMenuFirstChildComponent',
        name: 'secondMenuFirstChildComponent',
        meta: { title: '第二菜单第一页' },
        component: () =>
            import('@/views/secondmenuComponent/secondMenuFirstChildComponent/secondMenuFirstChildComponent.vue')
    },
    {
        path: 'secondMenuSecondChildComponent',
        name: 'secondMenuSecondChildComponent',
        meta: { title: '第二菜单第二页' },
        component: secondMenuSecondChildComponent
    }

]

export default routers
