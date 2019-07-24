/**
 * 所有的组件统一全局注册
 */
import appHeader from './app-header/app-header.vue'
import appUpload from './app-upload/app-upload.vue'

const Components = {
    install: function (Vue) {
        Vue.component('app-header', appHeader)
        Vue.component('app-upload', appUpload)
    }
}
export default Components
