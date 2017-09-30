<template>
  <div id="chings-supervisor">

    <header class="ching-supervisor-header">
      <mu-icon-button icon="menu" slot="left" @click="toggleMenu(true)" class="supervisor-menu"/>
    </header>

    <mu-drawer :open="open" :docked="docked" @close="toggleMenu()">
      <mu-list @itemClick="toggleMenu()">
        <mu-list-item title="新博客" to="/supervisor/article/add/types"/>
        <mu-list-item title="文章管理" to="/supervisor/articles"/>
        <mu-list-item title="网站统计"/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer>

    <mu-breadcrumb class="supervisor-breadcrumb" separator=">">
      <mu-breadcrumb-item href="/">首页</mu-breadcrumb-item>
      <mu-breadcrumb-item href="/">文章列表</mu-breadcrumb-item>
    </mu-breadcrumb>

    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        open: false,
        docked: false
      }
    },
    methods: {
      toggleMenu (flag) {
        this.open = !this.open
        this.docked = !flag
      }
    }
  }
</script>

<style>

  .ching-supervisor-header{
    width: 100%;
    height: 3.5rem;
    background-color: #f9c6f1;
  }

  .ching-supervisor-header .supervisor-menu{
    line-height: 1rem;
  }

  .supervisor-breadcrumb{
    font-size:15px;
    margin: 1rem 3rem;
  }

  .supervisor-breadcrumb a{
    color: #4f4f4f;
  }

  .supervisor-breadcrumb .mu-breadcrumb-item-separator{
    color: #cc54d9;
  }

</style>
