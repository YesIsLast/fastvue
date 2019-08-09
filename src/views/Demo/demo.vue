<template>
    <div>
        <h1>1.上传文件</h1>
        <input type="text" />
        <!-- accept参数用来选择需要的文件类型 -->
        <app-upload slot="append" accept v-on:appUpload="imageUpload">
            <button>上传</button>
        </app-upload>
        <h1>2.身份证号验证</h1>
        <input type="text" @change="cardValidate" />
        <span id="cardValidate"></span>
        <h1>3.父子组件沟通</h1>
        <demoChildComponent ref="demoChildComponent" :fatherInputVal.sync="fatherInputValParam" @search='childFun'></demoChildComponent>
        {{"父组件接收的参数值：" + fatherInputValParam}}
        <br>
        <a-button @click="demoChildComponentBtn">点击执行子组件中的方法并接收方法返回值</a-button>
        <br>
        {{ "子组件方法返回值：" + this.refdemoChildComponent }}
    </div>
</template>

<script>
import {IdCardValidate} from '../../lib/validate.js'

export default {
    name:'demo',
    watch:{
        
    },
    data(){
        return {
            fatherInputValParam:"", // 父子组件沟通的参数值
            refdemoChildComponent:"" // 子组件方法返回值
        }
    },
    methods: {
        imageUpload(filemsg) {
            console.log("查看当前所选中的文件信息");
            console.log(filemsg);
        },
        cardValidate(event) {
            let val = event.target.value
            if(!val){
                return
            }
            let _ValidateVal = IdCardValidate(val)
            if(_ValidateVal){
                document.getElementById("cardValidate").innerHTML = "身份证号码验证失败"
            }else{
                document.getElementById("cardValidate").innerHTML = "身份证号码验证成功"

            }
        },
        // 父子组件沟通
        demoChildComponentBtn(){
            this.refdemoChildComponent = this.$refs.demoChildComponent.selectInputVal()
        },
        // 被子组件所调用的方法
        childFun(childParams){
            alert("查看当前子组件传过来的参数值")
            alert(childParams)
        }

    }
};
</script>
