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
//  import {mapState} from 'vuex'
  import $ from 'jquery'

  export default {
    name: 'app',
//    computed: mapState({
//      showMenu: false
//    }),
    methods: {
    },
    mounted () {
      //  首页加载完成
      this.$nextTick(function () {
        $('#ching-index-Loading-img').hide()
      })
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

body{
  /*background-color: #e5e5e5;*/
  /*background-color: white;*/
  background-color: rgba(248, 248, 248, 0.99);

}

</style>
