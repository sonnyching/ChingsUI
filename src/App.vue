<template>
  <div id="app">

    <router-view></router-view>

   <!-- <div class="footer">
      Chings ©2017 Created by SonnyChing
    </div>-->
  </div>
</template>

<script>
//  import * as types from './vuex/types'
  import {mapState} from 'vuex'
  export default {
    name: 'app',
    computed: mapState({
      showMenu: false
    }),
    methods: {
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*color: #2c3e50;*/
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

body{
  /*background-color: #e5e5e5;*/
  /*background-color: white;*/
  background-color: rgba(248, 248, 248, 0.99);

}
</style>
