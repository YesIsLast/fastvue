<template>
    <div>
        <h1>1.上传文件</h1>
        <input type="text" />
        <!-- accept参数用来选择需要的文件类型 -->
        <app-upload slot="append" accept v-on:appUpload="imageUpload">
            <button>上传</button>
        </app-upload>
    </div>
</template>

<script>
export default {
    methods: {
        imageUpload(filemsg) {
            console.log("查看当前所选中的文件信息");
            console.log(filemsg);
        }
    }
};
</script>
