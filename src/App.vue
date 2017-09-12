<template>
  <div id="app">

    <router-view></router-view>

    <mu-dialog :open="dialog" title="title" ref="dialog">
      {{dialogMsg}}
      <mu-flat-button label="确定" slot="actions" primary @click="closeDialog"/>
    </mu-dialog>

   <!-- <div class="footer">
      Chings ©2017 Created by SonnyChing
    </div>-->
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

.footer{
  padding: 20px 0;
  text-align: center;
}
body{
  background-color: #e5e5e5;
}
</style>
