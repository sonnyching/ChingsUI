<template>
  <div class="article-container">
    <div class="article_detail_title">{{title}}</div>
    <div class="article_detail_header"> {{time}} by {{author}}</div>
    <div v-html="resultBody" class="article-content"></div>
  </div>

</template>

<script type="text/ecmascript-6">
  import URL from '../../utils/Interface'
  import {Marked, Renderer} from '../../../static/common/markdown'
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
        this.resultBody = Marked(res.data.data.content, { renderer: Renderer })
        this.title = res.data.data.title
        this.author = res.data.data.authorName
//        this.time = res.data.data.createTime
      })
    }
  }
</script>

<style>
@import "../../../static/common/article_markdown.css";
@import "../../../static/css/hightlight_styles/androidstudio.css";

  .article_detail_title{
    font-size: 30px;
    text-align: center;
    font-weight: 500;
  }

  .article_detail_header{
    margin:20px;
    text-align: center;
  }

</style>
