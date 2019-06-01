<template>
    <div>
        数据显示：{{ msg }}
        <br>
        <input type="text" v-model="msg">
        <br>
        <button v-on:click='nextPage'>点击去往首页页面</button>
    </div>
</template>
<script>
export default {
    name:'login',
    data() {
        return {
            msg: "vue的DOM操作"
        };
    },
    methods:{
        nextPage(){
            this.$router.push({name:'homepage'})
        }
    }
}
</script>
<style>
</style>
