<template>
    <div class="app-login">
        <!-- logo -->
        <div class="login-logo">
            <img src="../../assets/images/login-logo.png" class="logo-icon" />
            <span class="logo-icon-name">FastVue后台管理框架</span>
        </div>
        <div class="login-content">
            <div class="login-content-left">
                <img
                    src="../../assets/images/loginBackground2.png"
                    alt
                    class="login-content-left-img"
                />
            </div>
            <div class="login-content-right">
                <div class="login-content-right-welcome">欢迎登录</div>
                <div class="login-form">
                    <a-input
                        type="text"
                        placeholder="请输入用户名"
                        v-model="loginForm.userName"
                        class="loginInput"
                        size="large"
                    >
                        <a-icon slot="prefix" type="user" class="loginInput-icon" />
                        <!-- <a-icon v-if="loginForm.userName" slot="suffix" type="close-circle"/> -->
                    </a-input>
                    <div class="loginInput-decorator" v-if="!loginForm.userName">请输入用户名!</div>
                    <a-input
                        type="password"
                        placeholder="请输入密码"
                        v-model="loginForm.passWord"
                        class="loginInput"
                        size="large"
                        @keyup.enter="loginBtn"
                    >
                        <a-icon slot="prefix" type="lock" class="loginInput-icon" />
                        <!-- <a-icon v-if="loginForm.passWord" slot="suffix" type="close-circle"/> -->
                    </a-input>
                    <div class="loginInput-decorator" v-if="!loginForm.passWord">请输入密码!</div>
                    <button @click="loginBtn" class="loginBtn">
                        <a-icon type="loading" v-if="loginForm.loginStatus" />登&nbsp;&nbsp;录
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "login",
    watch: {
        "loginForm.userName"() {
            let _val = this.loginForm.userName;
            if (_val != "") {
                this.loginDecoratorName = true;
            } else {
                this.loginDecoratorName = false;
            }
        },
        "loginForm.passWord"() {
            let _val = this.loginForm.passWord;
            if (_val != "") {
                this.loginDecoratorPass = true;
            } else {
                this.loginDecoratorPass = false;
            }
        }
    },
    data() {
        return {
            loginDecoratorName: false,
            loginDecoratorPass: false,
            loginForm: {
                userName: "",
                passWord: "",
                loginStatus: false // 登录按钮加载状态
            }
        };
    },
    methods: {
        // 登录
        loginBtn() {
            if (!this.loginDecoratorName || !this.loginDecoratorPass) {
                return;
            } else {
                let url = "/login/loginToken";
                let params = {
                    exampleusername: "admin",
                    examplepassword: "1"
                };
                this.$post(url, params).then(res => {
                    console.log(res);
                });

                this.loginForm.loginStatus = true;
                setTimeout(fun => {
                    // 个人信息状态库与浏览器存储
                    this.$store.commit("FASTVUE_USER_INFO", this.loginForm);
                    // 登录成功路径跳转
                    this.$router.push({ path: "/homePage" });
                    // this.$router.push({name: "demo"})
                    this.loginForm.loginStatus = false;
                    console.log(this.loginForm);
                }, 1000);
            }
        }
    }
};
</script>
<style>
.app-login {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("../../assets/images/loginbac.png");
    background-repeat: no-repeat;
    background-size: 50% 80%;
}
.app-login .login-logo {
    position: absolute;
    left: 28px;
    height: 60px;
}
.app-login .login-logo .logo-icon {
    margin-right: 29px;
    height: 60px;
    width: 60px;
}
.app-login .login-logo .logo-icon-name {
    position: relative;
    font-family: Cursive;
    font-size: xx-large;
    font-style: oblique;
    top: 10px;
    color: rgb(255, 255, 255);
}

.app-login .login-content {
    /* border:#683c3c 3px solid; */
    box-shadow: 0 0 10px rgb(136, 165, 238); /* 设置阴影效果 inset内阴影，未加inset则为外阴影 */
    height: 700px; /**高度**/
    width: 1500px; /**宽度**/
    position: absolute; /**绝对定位**/
    left: 50%; /**左边50%**/
    top: 50%; /**顶部50%**/
    margin-top: -350px; /**上移-50%**/
    margin-left: -750px; /**左移-50%**/
    border-radius: 20px; /* 设置圆角 */
    background-color: rgba(255, 255, 255, 0.5); /* 设置背景色透明 */
}
.app-login .login-content .login-content-left {
    width: 900px;
    height: 700px;
    display: inline;
}
.app-login .login-content .login-content-left .login-content-left-img {
    position: absolute;
    margin-left: 150px;
    margin-top: 150px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: auto;
    width: auto;
}
.app-login .login-content .login-content-right {
    text-align: center;
    float: right;
    display: inline;
    width: 700px;
    height: 700px;
    /* background-color:rgb(93, 100, 100); 设置背景色透明 */
}
.app-login .login-content .login-content-right .login-content-right-welcome {
    height: auto;
    width: auto;
    font-size: x-large;
    color: rgb(54, 128, 224);
    letter-spacing: 8px;
    margin-top: 100px;
}
.login-content-right .login-form {
    margin-top: 50px;
}

.loginBtn {
    margin-top: 100px;
    width: 500px;
    height: 60px;
    background-color: rgb(106, 159, 255);
    border-radius: 30px; /* 设置圆角 */
    font-size: 18px;
    color: #fff;
    text-align: center;
    border: none;
}
.loginBtn:hover {
    border: none;
    background-color: rgb(132, 173, 248);
}
.loginBtn:focus {
    outline: 0;
}
.loginInput-icon {
    margin-top: 50px;
    margin-left: 87px;
}
.loginInput-decorator {
    color: rgb(255, 0, 0);
    text-align: center;
}
/* 重写组件库中的组件样式 */
.loginInput > .ant-input {
    width: 500px;
    margin-top: 50px;
    background-color: rgba(255, 255, 255, 0);
    border: none; /* 设置无边框 */
    box-shadow: 0 0 0 0 rgb(255, 255, 255);
    outline: none;
    -webkit-apperance: normal;
    border-color: #878787;
    border-style: solid;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;
    border-radius: 0px;
}
/* 取消浏览器中记住密码后默认的表单填充样式 */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
/* :focus 选择器用于选取获得焦点的元素 */
.loginInput > .ant-input:focus {
    /* border: none;
    box-shadow: 0 0 0 0 rgb(255, 255, 255);
    outline: 0;
    border:0px solid #ffffff;
    border-color:  rgb(0, 0, 0);
    border-style: solid;
    border-right-width: 0px;
    border-top-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px; */
}
/* 设置鼠标移入到输入框上的样式 */
.loginInput > .ant-input:hover {
    /* border: none; */
    /* outline:0; */
    /* border-right-color: rgb(255, 255, 255);
    border-bottom-width: 1px;
    border-bottom-color: black */
}
</style>