<template>
  <div class="article-detail-container">
    <div class="article-detail-body">
      <div class="article_detail_title">{{title}}</div>
      <div class="article_detail_header"> {{time}} {{author}}</div>
      <div v-html="resultBody" class="article-content"></div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import URL from '../../utils/Interface'
  import {Marked, Renderer} from '../../../statics/common/markdown'
  export default {
    data () {
      return {
        resultBody: '',
        title: '',
        author: '',
        time: ''
      }
    },
    methods: {

    },
    mounted () {
      this.$http.post(URL.articleDetail, {
        article_id: this.$route.params.id
      }).then((res) => {
        if (res.data.code !== 0) {
          alert('网页加载失败')
          return
        }
        this.resultBody = Marked(res.data.data.content, { renderer: Renderer })
        this.title = res.data.data.title
        this.author = res.data.data.authorName
//        this.time = res.data.data.createTime
      })
    }
  }
</script>

<style>
@import "../../../statics/common/article_markdown.css";
@import "../../../statics/css/hightlight_styles/androidstudio.css";

  .article-detail-container{
    width:100%;
    max-width: 960px;
    min-width: 640px;
    margin: 0 auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .article-detail-body{
    /*border:2px solid #f9f6cf;*/
    box-shadow: 3px 4px 10px #888888;
    background-color: #fcfaf2;
    padding: 2rem;
    margin:0 auto;
    border-radius: 1px;
  }

  .article_detail_title{
    font-size: 30px;
    text-align: center;
    font-weight: 500;
  }

  .article_detail_header{
    margin: 20px;
    text-align: center;
  }

</style>
