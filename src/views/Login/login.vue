<template>
    <div>
        数据显示：{{ msg }}
        <br>
        <input type="text" v-model="msg">
        <br>
        <a-button type="primary" v-on:click='nextPage'>登录</a-button>
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
