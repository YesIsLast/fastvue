<template>
    <!-- 顶部进度条 progressbarstyle增加进度条阴影效果-->
    <vue-progress-bar class="progressbarstyle"></vue-progress-bar>
</template>
<script>
export default {
    mounted() {
        //  [App.vue specific] When App.vue is finish loading finish the progress bar
        this.$Progress.finish();
    },
    // 页面跳转过渡动画
    created() {
        //  [App.vue specific] When App.vue is first loaded start the progress bar
        this.$Progress.start();
        //  hook the progress bar to start before we move router-view
        this.$router.beforeEach((to, from, next) => {
            //  does the page we want to go to have a meta.progress object
            if (to.meta.progress !== undefined) {
                let meta = to.meta.progress;
                // parse meta tags
                this.$Progress.parseMeta(meta);
            }
            //  start the progress bar
            this.$Progress.start();
            //  continue to next page
            next();
        });
        //  hook the progress bar to finish after we've finished moving router-view
        this.$router.afterEach((to, from) => {
            //  finish the progress bar
            this.$Progress.finish();
        });
    }
};
</script>
<style>
.progressbarstyle {
    box-shadow: 2px 2px 6px #3eb1fc;
}
</style>