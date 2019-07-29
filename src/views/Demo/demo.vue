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
    </div>
</template>

<script>
import {IdCardValidate} from '../../lib/validate.js'

export default {
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
        }
    }
};
</script>
