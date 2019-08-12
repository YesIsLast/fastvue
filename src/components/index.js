/**
 * 所有的组件统一全局注册
 */
/**
 * 布局组件
 */
import appHeader from './app-layout/app-header/app-header.vue'
import appFooter from './app-layout/app-footer/app-footer.vue'
import appMenu from './app-layout/app-menu/app-menu.vue'
import appContent from './app-layout/app-content/app-content.vue'
import appBreadcrumb from './app-layout/app-breadcrumb/app-breadcrumb.vue'
import appLayout from './app-layout/app-layout.vue'
/**
 * 功能组件
 */
import appUpload from './app-upload/app-upload.vue'
import vueProgressBar from './vue-progress-bar/vue-progress-bar.vue'
// 封装子组件
import demoChildComponent from './childComponents/demoChildComponent.vue'

const Components = {
    install: function (Vue) {
        Vue.component('app-layout', appLayout)
        Vue.component('app-header', appHeader)
        Vue.component('app-footer', appFooter)
        Vue.component('app-menu', appMenu)
        Vue.component('app-content', appContent)
        Vue.component('app-breadcrumb', appBreadcrumb)
        Vue.component('app-vue-progress-bar', vueProgressBar)
        Vue.component('app-upload', appUpload)
        Vue.component('demoChildComponent', demoChildComponent)
    }
}
export default Components
