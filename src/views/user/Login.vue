<template>
  <div class="login-container">
    <div class="login_box">
     <div class="content">
       <img src="../../../static/images/user_default.jpg"/>
       <mu-text-field hintText="用户名" v-model="name"/><br/>
       <mu-text-field hintText="密码" type="password" v-model="password"/><br/>
       <mu-raised-button label="登陆" @click="login()" class="demo-raised-button" primary/>
     </div>
    </div>
  </div>


</template>

<script type="text/ecmascript-6">
//  import $ from 'jquery'
  import URL from '../../utils/Interface'
  import * as types from '../../vuex/types'
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
        this.$http.post(URL.login, {
          password: this.password,
          name: this.name
        }).then((res) => {
          console.log(res)
          if (res.data.code !== 0) {
            alert(res.data.msg)
            return
          }
          this.$store.commit(types.MUTATION_UPDATE_TOKEN, res.data.token)
          this.$router.push({path: '/account'})
        })
      }

    },
    mounted () {
//      this.$refs.dialog.openDialog()
//      this.$store.commit(types.DIALOG_OPEN, {
//        title: 'title',
//        msg: '测试消息啦'
//      })
     /* $(window).resize(function () {
        $('.login_box').css({
          left: ($(window).width() - $('.login_box').outerWidth()) / 2,
          top: ($(window).height() - $('.login_box').outerHeight()) / 2
        })
      })
      $(window).resize()  */
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
