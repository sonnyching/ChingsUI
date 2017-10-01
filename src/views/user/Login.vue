<template>
  <div class="login-container">
    <div class="login_box">
     <div class="content">
       <img src="../../../statics/images/user_default.jpg"/>
       <el-input placeholder="请输入用户名..." v-model="name" class="ching-login-input">
       </el-input>
       <el-input placeholder="请输入密码..." type="password" v-model="password" class="ching-login-input">
       </el-input>
       <el-button type="primary" @click="login()" class="ching-login-raised-button">Login</el-button>
     </div>
    </div>
  </div>


</template>

<script type="text/ecmascript-6">
//  import $ from 'jquery'
  import URL from '../../utils/Interface'
//  import * as types from '../../vuex/types'
  export default {
    data () {
      return {
        name: '',
        password: '',
        toast: false,
        message: ''
      }
    },
    methods: {
      login () {
        if (this.name === '') {
          alert('请输入用户名')
          return
        }
        if (this.password === '') {
          alert('请输入密码')
          return
        }
        this.$http.post(URL.login, {
          password: this.password,
          name: this.name
        }).then((res) => {
          if (res.data.code !== 0) {
            alert(res.data.msg)
            return
          }
          //  this.$store.commit(types.MUTATION_UPDATE_TOKEN, res.data.token)
          sessionStorage.setItem('ChingsToken', res.data.token)
          this.$router.push({path: '/supervisor/home'})
        })
      }

    },
    mounted () {
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

  .ching-login-input{
    max-width:15rem;
    margin: 0.5rem 1rem;
  }

  .ching-login-raised-button{
    max-width:15rem;
    display: block;
    margin:0 auto;
  }
</style>
