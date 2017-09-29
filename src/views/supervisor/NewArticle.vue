<template>
    <div class="new-article-container">
      <label>请选择文章类型</label>
      <mu-select-field v-model="selectType"  class="new-article-content">
        <mu-menu-item :value="type.id" :title="type.name" v-for="type in typelist" />
      </mu-select-field>

      <mu-raised-button label="保存文章" class="demo-raised-button" primary  @click="newArticle"/>

    </div>
</template>

<script type="text/ecmascript-6">
  import URL from '../../utils/Interface'

  export default {
    data () {
      return {
        selectType: '',
        typelist: []
      }
    },
    method: {
      newArticle (typeId) { //  创建新文章
        this.$http.post(URL.newArticle, {
          typeId: typeId
        }).then((res) => {
          if (res.data.code === 0) {
            //  跳转到文章编辑页
            this.$router.push({path: '/supervisor/home'})
          }
        })
      }
    },
    mounted () {
      this.$http.post(URL.articleTypes, {
      }).then((res) => {
        if (res.data.code === 0) {
          this.typelist = res.data.data
        }
      })
    }
  }
</script>

<style>

  .new-article-container{
    width: 80%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .new-article-content{
    margin: 0 auto;
  }

  .new-article-container label{
    display: block;
    color: #7e57c2;
    font-size: 1.2rem;
  }


</style>
