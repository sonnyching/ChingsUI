<template>
  <div id="app">
    <div class="header">
      <mu-appbar title="">
        <mu-icon-button icon="menu" slot="left" @click="toggleMenu"/>
        <!--<mu-flat-button label="登陆" slot="right"/>-->
        <mu-icon-menu icon="more_vert" slot="right">
          <mu-menu-item title="首页" @click="goHome"/>
          <!--<mu-menu-item title="写文章" @click="goWriting"/>-->
          <!--<mu-menu-item title="登陆" @click="goLogin"/>-->
          <!--<mu-menu-item title="注销"/>-->

        </mu-icon-menu>
      </mu-appbar>
    </div>

    <router-view></router-view>

    <mu-dialog :open="dialog" title="title" ref="dialog">
      {{dialogMsg}}
      <mu-flat-button label="确定" slot="actions" primary @click="closeDialog"/>
    </mu-dialog>

    <div class="footer">
      Chings ©2017 Created by SonnyChing
    </div>
  </div>
</template>

<script>
  import * as types from './vuex/types'
  import {mapState} from 'vuex'
  export default {
    name: 'app',
    computed: mapState({
      dialog: state => state.Dialog.open,
      dialogMsg: state => state.Dialog.msg,
      title: state => state.Dialog.tilte,
      showMenu: false
    }),
    methods: {
      closeDialog () {
        this.$store.commit(types.DIALOG_CLOSE)
      },
      toggleMenu () {
        this.showMenu = !this.showMenu
      },
      goWriting () {
        this.$router.push({path: '/article/add'})
      },
      goHome () {
        this.$router.push({path: '/'})
      },
      goLogin () {
        this.$router.push({path: '/user/login'})
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

.header{
  background-color: #878787;
}

.footer{
  padding: 20px 0;
  text-align: center;
}
body{
  background-color: #e5e5e5;
}
</style>
