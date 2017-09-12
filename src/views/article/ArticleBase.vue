<template id='article'>
  <div>

    <div class="header">
      <mu-appbar title="">
        <!--<mu-icon-button icon="menu" slot="left" @click="toggleMenu"/>-->
        <mu-icon-menu icon="more_vert" slot="right">
          <mu-menu-item title="首页" @click="goHome"/>
        </mu-icon-menu>
      </mu-appbar>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'article'
}
</script>
