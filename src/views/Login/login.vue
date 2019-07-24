<template>
  <a-form layout="inline" :form="loginForm" @submit="loginSubmit" id="loginForm">
    <a-form-item>
      <a-input placeholder="用户名" v-decorator="[ 'userName',{ rules:[{ required: true, message: '请输入你的用户名!'}]}]">
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input type="password" placeholder="密码" @keyup.enter="loginSubmit" v-decorator="['password',{ rules:[{ required: true, message: '请输入你的密码!'}]}]">
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit"> 登录 </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import service from '../../service/login/index'

export default {
  data(){
      return{
        loginForm : this.$form.createForm(this)
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
  },
};
</script>
<style>
#loginForm{
    text-align: center
}
</style>