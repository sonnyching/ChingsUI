<template>
  <div class="login-container">
    <div class="login_box">
     <div class="content">
       <img src="../../static/images/user_default.jpg"/>
       <mu-text-field hintText="用户名"/><br/>
       <mu-text-field hintText="密码" v-model="value"/><br/>
       <mu-raised-button label="登陆" class="demo-raised-button" primary/>
     </div>
    </div>
  </div>


</template>

<script type="text/ecmascript-6">
//  import $ from 'jquery'
  export default {
    name: 'app',
    data: {},
    components: {},
    mounted () {
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
