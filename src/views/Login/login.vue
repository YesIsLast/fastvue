<template>
<div class="app-login">
    <!-- logo -->
    <div class="logo">
      <img src="../../assets/images/login-logo.png" class="logo-icon">
      <span class="logo-icon-name">快速构建VUE后台管理框架</span>
    </div>


    <div class="login-content">
      <div class="login-content-left">
        <img src="../../assets/images/loginBackground2.png" alt="" class="login-content-left-img">
      </div>
      
      <div class="login-content-right">
          <!-- <span class="login-content-right-welcome" style="margin-top:200px"></span> -->
          <div class="login-content-right-welcome">欢迎登录</div>
        <div class="login-form">
          <a-input type="text" placeholder="请输入用户名" v-model="loginForm.userName" class="loginInput"  size="large">
            <a-icon slot="prefix" type="user" class="loginInput-icon" />
            <!-- <a-icon v-if="loginForm.userName" slot="suffix" type="close-circle"/> -->
          </a-input>
          <a-input type="password" placeholder="请输入密码" v-model="loginForm.passWord" class="loginInput" size="large">
            <a-icon slot="prefix" type="lock" class="loginInput-icon"/>
            <!-- <a-icon v-if="loginForm.passWord" slot="suffix" type="close-circle"/> -->
          </a-input>

          <!-- <a-button type="primary" :loading='loginForm.loginStatus' @click="loginBtn" size="large" class="loginBtn">
            登录
          </a-button> -->
          <button @click="loginBtn" class="loginBtn">
            登&nbsp;&nbsp;录
          </button>
        </div>
      </div>


    </div>


    <!-- <a-form layout="inline" :form="loginForm" @submit="loginSubmit" id="loginForm">
        <a-form-item>
          <a-input placeholder="用户名" v-decorator="[ 'userName',{ rules:[{ required: true, message: '请输入用户名!'}]}]">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input type="password" placeholder="密码" @keyup.enter="loginSubmit" v-decorator="['password',{ rules:[{ required: true, message: '请输入密码!'}]}]">
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit"> 登录 </a-button>
        </a-form-item>
      </a-form> -->
  </div>
</template>
<script>
import service from '../../service/login/index'

export default {
  data(){
      return{
        // loginForm : this.$form.createForm(this)
        loginForm:{
          userName:"",
          passWord:"",
          loginStatus:false // 登录按钮加载状态
        }
      }
  },
  methods: {
    loginSubmit (event) {
      event.preventDefault();
      this.loginForm.validateFields((err, values) => {
          service.loginPro(values).then(res =>{
            console.log('查看当前请求返回值')
            console.log(res)
          })
      });
          this.$router.push({path:"/homePage"})
    },
    // 登录
    loginBtn(){
      this.loginForm.loginStatus = true;
      setTimeout(fun =>{
      this.loginForm.loginStatus = false;
      console.log(this.loginForm)
      }, 3000)
    }
  },
};
</script>
<style>
  .app-login {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image:url("../../assets/images/loginbac.png");
    background-repeat:no-repeat;
    background-size:50% 80%
  }
  .app-login .logo {
    position: absolute;
    left: 28px;
    height: 60px;
  }
  .app-login .logo .logo-icon {
    margin-right: 29px;
    height: 60px;
    width: 60px
  }
  .app-login .logo .logo-icon-name {
    position: relative;
    font-family: Cursive;
    font-size:xx-large;
    font-style:oblique;
    top: 10px
  }
  
  .app-login .login-content{
    /* border:#683c3c 3px solid; */
    box-shadow:0 0 10px rgb(136, 165, 238); /* 设置阴影效果 inset内阴影，未加inset则为外阴影 */
    height:700px;/**高度**/
    width:1500px;/**宽度**/
    position:absolute;/**绝对定位**/
    left:50%;/**左边50%**/
    top:50%;/**顶部50%**/
    margin-top:-350px;/**上移-50%**/
    margin-left:-750px;/**左移-50%**/
    border-radius:20px; /* 设置圆角 */
    background-color:rgba(255, 255, 255, 0.5); /* 设置背景色透明 */
  }
  .app-login .login-content .login-content-left{
    width: 900px;
    height: 700px;
    display:inline;
  }
  .app-login .login-content .login-content-left .login-content-left-img{
    position:absolute;
    margin-left:150px;
    margin-top: 150px;
    left:0;
    top:0;
    right:0;
    bottom:0;
    height:auto;
    width:auto;
  }
  .app-login .login-content .login-content-right{
    text-align: center;
    float: right;
    display:inline;
    width: 700px;
    height: 700px;
    /* background-color:rgb(93, 100, 100); 设置背景色透明 */
  }
  .app-login .login-content .login-content-right .login-content-right-welcome{
    height: auto;
    width: auto;
    font-size: x-large;
    color: rgb(54, 128, 224);
    letter-spacing:8px;
    margin-top: 100px
  }
  .login-content-right .login-form{
    margin-top: 50px
  }
  
  .loginBtn{
    margin-top: 100px;
    width: 500px;
    height: 60px;
    background-color:  #1890ff; 
    border-radius:30px; /* 设置圆角 */
    font-size: 18px;
    color: #fff;
    text-align: center;
    border: none;
  }
  /* 重写组件库中的组件样式 */
  .loginInput > .ant-input {
    width: 500px;
    margin-top: 50px;
    background-color: rgba(255, 255, 255, 0);
    border: none; /* 设置无边框 */
    box-shadow: 0 0 0 0 rgb(255, 255, 255);
    outline: none;
    border-color: #878787; 
    border-style: solid; 
    border-top-width: 0px;
    border-right-width: 0px; 
    border-bottom-width: 1px;
    border-left-width: 0px;
    border-radius:0px
  }
  /* .loginInput > .ant-input { */
  /* :focus 选择器用于选取获得焦点的元素 */
  /* .ant-input:focus{
    border: none;
    box-shadow: 0 0 0 0 rgb(255, 255, 255);
    outline: none;
    border-color: #878787; 
    border-style: solid; 
    border-right-width: 0px;
    border-top-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;
  } */
  /* 设置鼠标移入到输入框上的样式 */
  /* .ant-input:hover{
    border: none;
    border-right-color: rgb(0, 0, 0);
    border-bottom-width: 1px;
  } */
  .loginInput-icon{
    margin-top: 50px;
    margin-left: 87px
  }
</style>