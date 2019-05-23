<template>
    <div id="Appmain">
        <h2>/main/firstmenuComponent 匹配成功，进入main界面路由第二次渲染</h2>
        <router-view :key="key"></router-view>
    </div>
</template>
<script>
export default {
    name: "Appmain",
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
    },
};
</script>
<style>
</style>
