<template>
    <a-layout-content style="margin: 0 16px">
        <app-breadcrumb></app-breadcrumb>
        <div class="app-content">
            <router-view :key="key"></router-view>
        </div>
    </a-layout-content>
</template>
<script>
export default {
    watch: {
        // 如果路由有变化，会再次执行该方法
        $route(to, from) {
            this.key = to.name;
        }
    },
    data() {
        return {
            key: ""
        };
    }
};
</script>
<style>
.app-content {
    /* border:#683c3c 3px solid; */
    height: 100%;
    box-shadow: 0 0 3px rgb(120, 124, 133); /*设置阴影效果 inset内阴影，未加inset则为外阴影*/
}
</style>