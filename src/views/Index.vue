<template>
  <div class="layout">
    <div class="content">
      <div class="breadcrumb">
        <div v-for=" article in articleList">

          <div class="content-item-wrapper" @click="articleDetail(article.id)">
            <div class="content-item-title">{{article.title}}</div>
            <div class="content-item-line"></div>
            <div class="content-item-content">{{article.content}}......</div>
            <!--<div class="content-item-time">{{article.createTime}}</div>-->
            <div class="content-item-end"></div>

          </div>

         <!-- <mu-card class="article_card">
            <mu-card-title :title="article.title"
                           class="article_card_title"
                           :subTitle="'作者：'+ article.authorName"/>
            <mu-card-text class="article_card_text">
              {{article.content}}......
            </mu-card-text>
            <mu-card-actions>
              <mu-flat-button label="查看" @click="articleDetail(article.id)"/>
            </mu-card-actions>
          </mu-card>-->
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
        this.$router.push({path: '/article/detail/' + id})
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

  .content-item-wrapper{
    cursor: pointer;
    text-align: center;
    width:90%;
    min-width: 300px;
    max-width: 900px;
    margin: 3rem 2rem;
  }

  .content-item-title {
    font-size: 20px;
    color: #878787;
    width: 100%;
    text-align: left;

  }

  .content-item-line{
    width:50%;
    //border-bottom: 1px solid #878787;
    margin: 1.5rem 0px;
  }

  .content-item-content{
    width:100%;
    text-align: justify;
    text-justify: inter-ideograph;
    text-indent: 2em;
    font-size: 1rem;
    color: #6b6b6b;
    font-family: '微软雅黑';
    line-height: 1.7rem;
  }

  .content-item-time{
    margin-top: 1rem;
    text-align: left;
  }

  .content-item-end{
    width:100%;
    border-bottom: 1px solid #9d9d9d;
    margin: 2.2rem 0px;
  }

</style>
