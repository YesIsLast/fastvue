<template>
    <div>
        <span>子组件中的输入框(数据实时传输)：</span>
        <a-input type="text" v-model="inputVal"></a-input>
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
        }
    }
};
</script>

<style>
</style>
