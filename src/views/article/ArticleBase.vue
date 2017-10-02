<template id='article'>
  <div>

    <div class="ching-article-header" @click="$router.push('/')">
      <div class="ching-article-header-title">
        Ching
      </div>
    </div>

    <div class="ching-article-body"></div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'article'
}
</script>


<style scoped>
  .ching-article-header{
    width:100%;
    /*background-color: #C7B3E5;*/
    background-color: #72d4fb;
    height: 3.6rem;
    margin-bottom: 0.1rem;
    position: fixed;

  }
  .ching-article-header-title{
    line-height: 3.6rem;
    margin: 0 1rem;
    font-family: Cursive,Lucida Grande, Lucida Sans Unicode, Helvetica, Arial, Verdana, sans-serif;
    font-size: 1.5rem;
    color: white;
  }
/*
  .ching-article-body{
    margin-top: 1rem;
  }*/

  .ching-article-header-title:hover{
    cursor: pointer;
  }

</style>
