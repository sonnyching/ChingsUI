<template>
  <div id="app">

    <router-view></router-view>

  <!--  <div class="float-menu" draggable="true">
      <i class="fa fa-paper-plane-o"></i>
    </div>-->

   <!-- <div class="footer">
      Chings ©2017 Created by SonnyChing
    </div>-->
  </div>
</template>

<script>
//  import * as types from './vuex/types'
//  import {mapState} from 'vuex'
//  import $ from 'jquery'

  export default {
    name: 'app',
//    computed: mapState({
//      showMenu: false
//    }),
    methods: {
    },
    mounted () {
//      //  首页加载完成
//      this.$nextTick(function () {
//        $('#ching-index-Loading-img').hide()
//      })
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
    background-color: rgba(248, 248, 248, 0.99);
    font-size: 10px;
    font-family: Helvetica, Tahoma, Arial, STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans-serif;

  }

/*  .float-menu{
    background-color: #bdbdbd;
    width: 3rem;
    height: 3rem;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    text-align: center;
    border-radius: 50% 50%;
  }

  .float-menu i{
    width:100%;
    height:100%;
    margin-top: 1rem;
  }*/

</style>
