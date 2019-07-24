<template>
  <span @click="upload">
    <slot></slot>
  </span>
</template>
<script>
export default {
    name: "app-upload",
    props: {
        // 文件类型后缀.text/xlsx/pdf...
        accept: String
    },
    data() {
        return {};
    },
    methods: {
        upload() {
            // 存错文件信息集
            const fileMsg = {
                file: {}, // 文件信息
                fileFlow: "", // 文件流
                name: "", // 文件名称
                type: "", // 文件类型
                base64String: "", // 文件流base64编码
                size: 0 // 文件大小
            };
            // 使用input访问本地磁盘文件
            var input = document.createElement("input");
            // 设置文件类型
            input.accept = this.accept;
            // 设置输入框类型
            input.type = "file";
            // 模拟input点击事件,打开本地磁盘选择文件
            input.click();
            // 模拟input框change事件,event 参数为当前事件所含有的信息
            input.onchange = function(event) {
                // 获取当前所选择文件的信息(仅单文件)
                var file = event.target.files[0];
                // 文件信息赋值
                fileMsg.file = file;
                fileMsg.name = file.name;
                fileMsg.type = file.type;
                fileMsg.size = file.size;
                // fileMsg.type =
                // new一个FileReader文件读取对象,操作文件流
                const reader = new FileReader();
                // 读取指定的 Blob 或 File 对象,读取操作完成的时候,触发 loadend 事件,同时 result 属性将包含一个data:URL格式的字符串（base64编码）以表示所读取文件的内容。
                reader.readAsDataURL(file);
                // fileReader.onload文件读取完触发当前事件
                reader.onload = function(event) {
                    // 文件流读取结果
                    fileMsg.base64String = event.target.result.split("base64,")[1];
                    // 文件信息赋值
                    fileMsg.fileFlow = event.target.result;
                };
            };
            // 自定义当前组件指令,用于组件调用处 v-on:appUpload="imageUpload(fileMsg)"
            this.$emit("appUpload", fileMsg)
        }
    }
};
</script>
<style>
</style>
