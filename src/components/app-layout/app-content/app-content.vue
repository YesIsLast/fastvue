<template>
    <a-layout-content style="margin: 0 16px">
        <app-breadcrumb></app-breadcrumb>
        <router-view :key="key"></router-view>
    </a-layout-content>
</template>
<script>
export default {
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route' (to, from) {
        this.key = to.name;
        console.log('当前路由发生变化，即将跳转路径为'+ this.key)
      }
    },
    data() {
      return {
        key: ''
      }
    }
}
</script>