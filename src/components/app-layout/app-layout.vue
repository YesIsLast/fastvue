<template>
    <!-- 侧边布局 #
    侧边两列式布局。页面横向空间有限时，侧边导航可收起。
    侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。
    内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，
    一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，
    有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。-->

    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <!-- 顶部加载进度条 -->
        <app-vue-progress-bar></app-vue-progress-bar>
        <!-- 菜单 -->
        <app-menu></app-menu>
        <a-layout>
            <!-- 页头 -->
            <app-header></app-header>
            <!-- 内容区 -->
            <app-content></app-content>
            <!-- 页脚 -->
            <app-footer></app-footer>
        </a-layout>
    </a-layout>
</template>

<style>
#components-layout-demo-side .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}
</style>