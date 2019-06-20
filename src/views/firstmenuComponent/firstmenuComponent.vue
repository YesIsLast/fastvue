<template>
    <!-- 第一菜单栏 -->
    <div class="page-firstmenu">
        <h3>/main/firstmenuComponent/firstMenuFirstChildComponent 路径匹配成功，在firstmenuComponent.vue上的router-view第三次渲染</h3>
        <router-view ></router-view>
    </div>
</template>

<script>
export default {
    // watch: {
    //     // 如果路由有变化，会再次执行该方法
    //     $route(to, from) {
    //         this.key = to.name;
    //     }
    // },
    // data() {
    //     return {
    //         key: ""
    //     };
    // },
    methods: {},
    computed: {},
    mounted() {}
};
</script>

<style>
.page-firstmenu {
    height: 100%;
}
</style>
