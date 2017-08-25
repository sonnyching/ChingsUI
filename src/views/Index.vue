<template>
  <div class="layout">
    <div class="content">
      <div class="breadcrumb">
        <div v-for=" article in articleList">
          <mu-card class="article_card">
            <mu-card-title :title="article.article_title"
                           class="article_card_title"
                           :subTitle="'作者：'+ article.article_author"/>
            <mu-card-text class="article_card_text">
              {{article.article_intro}}
            </mu-card-text>
            <mu-card-actions>
              <mu-flat-button label="查看" @click="articleDetail(article.article_id)"/>
            </mu-card-actions>
          </mu-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import API from '../utils/Interface'
  export default {
    name: 'hello',
    data () {
      return {
        articleList: [],
        currentPage: 1
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
      articleDetail (id) {
        this.$router.push({path: '/ArticleDetail/' + id})
      }
    },
    mounted () {
      this.$http.post(API.articleList, {currentPage: this.currentPage})
        .then((res) => {
          this.articleList = res.data.data.list
        })
        .catch((error) => {
          console.log(error)
        })
    }
}
</script>
<style scoped>
  .layout{
    min-width: 600px;
  }

  .content{
    width: 96%;
    margin: 0 auto;
  }

  .breadcrumb{
    margin: 10px 0;
  }

  .article_card{
    margin: 20px;
  }

  .article_card_title{
    background-color: #9d76b7;
    font-size: 15px;
  }

  .article_card_text{
    font-family: "微软雅黑";
    text-indent:40px;
    padding:20px;
    text-align: left;
  }


</style>
