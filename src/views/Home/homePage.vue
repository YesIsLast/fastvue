<template>
    <div>
        <p>首页信息展示</p>
        <a-input type="number" style="width:400px" v-model="dataId" @keyup.enter="sendGet" placeholder="输入数据信息主键ID，搜索。[+键盘回车事件]">
        </a-input>
        <a-button type="primary" @click="sendGet" >点击发起GET请求</a-button>
        <div>
        <span v-if="showresp">请求返回值JSON串如下</span>
        <p>{{respMessage}}</p>
        </div>
        <a-button type="primary" @click="first">跳转到第一页面</a-button>
        <a-button type="primary" @click="second">跳转到第二页面</a-button>
        <a-button type="primary" @click="demo">进入DEMO例子</a-button>
    </div>
</template>
<script>
export default {
    name: "homePage",
    watch: {},
    data() {
        return {
            dataId: null,
            respMessage: null,
            showresp: false,
        };
    },
    methods: {
        sendGet() {
            // 查看差异
            let url = "/login/secondChildSsmExampleTable";
            let params = { exampleid: this.dataId };
            // // 开始执行请求
            // GetUrlHttp(url,params).then(resp => {
            //     this.showresp = true;
            //     this.respMessage = resp
            // }).catch(err => {
            //     alert('发送GET请求出错函数sendGet')
            //     console.log(err)
            // })
        },
        first() {
            this.$router.push({ name: "firstmenuComponent" });
        },
        second() {
            this.$router.push({ name: "secondmenuComponent" });
        },
        demo() {
            this.$router.push({ name: "demo" });
        }
    },
    // 执行钩子函数，页面初始化渲染
    async mounted() {}
};
</script>

<style>
</style>
