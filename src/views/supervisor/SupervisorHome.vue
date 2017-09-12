<template>
    <div>
     <!-- <mu-raised-button label="undocked drawer" @click="toggle(true)"/>
      <mu-drawer :open="open" :docked="docked" @close="toggle()">
        <mu-list @itemClick="docked ? '' : toggle()">
          <mu-list-item title="新博客"/>
          <mu-list-item title="文章管理"/>
          <mu-list-item title="网站统计"/>
          <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
        </mu-list>
      </mu-drawer>-->
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'app',
      data () {
        return {
          open: false,
          docked: true
        }
      },
      methods: {
        toggle (flag) {
          this.open = !this.open
          this.docked = !flag
        }
      }
    }
</script>

<style>

</style>
