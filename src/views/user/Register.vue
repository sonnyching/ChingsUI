<template>
  <div class="login-container">
    <div class="login_box">
     <div class="content">
       <mu-text-field hintText="用户名" v-model="name"/><br/>
       <mu-text-field hintText="密码" type="password" v-model="password"/><br/>
       <mu-text-field hintText="邮箱" v-model="email"/><br/>

       <mu-raised-button label="注册" class="demo-raised-button" primary @click="register()"/>
     </div>
    </div>
  </div>


</template>

<script type="text/ecmascript-6">
  //  import $ from 'jquery'
  import URL from '../../utils/Interface'
  export default {
    data () {
      return {
        name: '',
        password: '',
        email: '',
        toast: false,
        message: ''
      }
    },
    methods: {
      register () {
        this.$http.post(URL.register, {
          password: this.password,
          name: this.name,
          email: this.email
        }).then((res) => {
          console.log(res)
          if (res.data.code !== 0) {
            alert(res.data.msg)
            return
          }
          this.$router.push({ path: '/login' })
        })
      }

    }
  }
</script>

<style>
  .login-container{
    width: 100%;
    min-height:500px;
    display:table;
  }

  .login_box{
    display: table-cell;
    vertical-align:middle;
    text-align: center;
  }

  .login_box .content{
    width:400px;
    height: 100%;
    border-radius: 3px;
    background-color: #ffffff;
    padding:20px;
    margin:0 auto;
  }

</style>
