<template>
    <div>
        <span>子组件中的输入框(数据实时传输)：</span>
        <a-input type="text" v-model="inputVal" placeholder='子组件输入值'></a-input>
        <a-button @click="clickFather()">调用父组件中的方法</a-button>
    </div>
</template>
<script>
export default {
    name:"demoChildComponent",
    // 可以接收和返回父子组件之间的传参
    props:{
        fatherInputVal:{
            type:String,
        }
    },
    data(){
        return {
            inputVal:""
        }
    },
    watch:{
        // 监听输入值得变化
        inputVal:function (val,oldVal){
            console.log("查看当前准备传入父组件中的值")
            console.log(val)
            this.$emit('update:fatherInputVal',val)
        }
    },
    methods:{
        selectInputVal(){
            console.log("子组件中方法的返回值为：" + this.inputVal)
            return this.inputVal
        },
        clickFather(){
            let params = "我是一个子组件定义的指令所携带的参数"
            // 为当前子组件定义个指令并传出参数
            this.$emit('search',params)
        }
    }
};
</script>

<style>
</style>
