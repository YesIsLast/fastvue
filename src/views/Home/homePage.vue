<template>
    <div>
        <p>首页信息展示</p>
        <a-input
            type="number"
            style="width:400px"
            v-model="dataId"
            @keyup.enter="sendGet"
            placeholder="输入数据信息主键ID，搜索。[+键盘回车事件]"
        ></a-input>
        <br />
        <a-button type="primary" @click="sendGet">点击发起参数存放到URL中的GET</a-button>
        <br />
        <a-button type="dashed" @click="sendGetUrl">点击发起参数值存放到URL中的占位符GET</a-button>
        <br />
        <a-button type="danger" @click="sendPOST">点击发起参数值存放到URL中的占位符GET</a-button>
        <div>
            <span v-if="showresp">请求返回值JSON串如下</span>
            <p>{{respMessage}}</p>
        </div>
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
            showresp: false
        };
    },
    methods: {
        // 参数存放到URL中的GET
        sendGet() {
            // 查看差异
            let url = "/login/secondChildSsmExampleTable";
            let params = { exampleid: this.dataId };
            this.showresp = false;
            this.$get(url, params).then(res => {
                this.showresp = true;
                this.respMessage = res;
                console.log(res);
            });
        },
        // 参数值存放到URL中的占位符GET
        sendGetUrl() {
            // 查看差异
            let url = "/login/thirdChildSsmExampleTable/" + this.dataId;
            this.showresp = false;
            this.$get(url).then(res => {
                this.showresp = true;
                this.respMessage = res;
                console.log(res);
            });
        },
        // post请求示例
        sendPOST() {
            let url = "/login/firstChildSsmExampleTable/";
            let params = {
                exampleid: this.dataId
            };
            this.showresp = false;
            this.$post(url, params).then(res => {
                this.showresp = true;
                this.respMessage = res;
                console.log(res);
            });
        }
    },
    // 执行钩子函数，页面初始化渲染
    async mounted() {}
};
</script>

<style>
</style>
