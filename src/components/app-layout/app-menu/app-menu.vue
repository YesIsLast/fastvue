<template>
    <a-layout-sider collapsible v-model="collapsed">
        <div class="logo" style="background: rgba(255, 255, 255, 0);">
            <!-- <img src="../../../assets/images/login-logo.png" alt=""> -->
            <a-icon type="thunderbolt" style="margin-right:8px" />
            <!-- <span v-if="!collapsed">FastVueSystem</span> -->
        </div>
        <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
            <a-menu-item key="1" @click.capture="DoubleMenuBack">
                <div @click="clickMenu('homePage')">
                    <a-icon type="home" />
                    <span>首页</span>
                </div>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <span slot="title">
                    <a-icon type="bars" />
                    <span>一级菜单</span>
                </span>
                <a-menu-item key="2" @click="clickMenu('main/firstmenuComponent')">二级菜单第一页</a-menu-item>
                <a-menu-item key="3" @click="clickMenu('main/secondmenuComponent')">二级菜单第二页</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <span slot="title">
                    <a-icon type="bars" />
                    <span>demo功能</span>
                </span>
                <a-menu-item key="4" @click="clickMenu('404')">
                    <a-icon type="upload" />上传
                </a-menu-item>
                <a-menu-item key="5" @click="clickMenu('404')">
                    <a-icon type="table" />表格
                </a-menu-item>
                <a-menu-item key="6" @click="clickMenu('404')">
                    <a-icon type="cluster" />tree树形控件
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
                <span slot="title">
                    <a-icon type="setting" />
                    <span>系统管理</span>
                </span>
                <a-menu-item key="7" @click="clickMenu('404')">
                    <a-icon type="user" />账号管理
                </a-menu-item>
                <a-menu-item key="8" @click="clickMenu('404')">
                    <a-icon type="team" />角色管理
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub4">
                <span slot="title">
                    <a-icon type="setting" />
                    <span>前端面试</span>
                </span>
                <a-menu-item key="9" @click="clickMenu('main/web_primary')">
                    <a-icon type="user" />初级web前端
                </a-menu-item>
            </a-sub-menu>
            <a-menu-item key="10" @click.capture="DoubleMenuBack">
                <div @click="clickMenu('demo')">
                    <span>进入功能点demo测试页面</span>
                </div>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>
<script>
export default {
    name: "app-menu",
    data() {
        return {
            collapsed: false
        };
    },
    methods: {
        // 菜单跳转页面
        clickMenu(menurouter) {
            this.$router.push({ path: "/" + menurouter });
        },
        // 处理重复点击路由时，可以刷新当前页面
        DoubleMenuBack() {
            let url = window.location.hash.slice(1);
            this.prevPath;
            let path = this.$route.fullPath;
            if (this.prevPath === path) {
                this.$router.push("/main/back");
            }
            this.prevPath = path;
        }
    }
};
</script>
<style>
.logo {
    font-size: large;
    color: rgb(34, 243, 104);
    text-align: center;
}
</style>