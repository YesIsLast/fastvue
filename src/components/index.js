/**
 * 所有的组件统一全局注册
 */
import appHeader from '../components/app-header/app-header.vue'

const Components = {
    install: function (Vue) {
        Vue.component('app-header', appHeader)
    }
}
export default Components
