<template>
  <div class="article-container">
    <div v-html="resultBody" class="article-content"></div>
  </div>

</template>

<script type="text/ecmascript-6">
  import URL from '../../utils/Interface'
  import {Marked, Renderer} from '../../../static/common/markdown'
  export default {
    data () {
      return {
//        message: {},
        resultBody: ''
      }
    },
    methods: {
    },
    mounted () {
      this.$http.post(URL.articleDetail, {
        article_id: this.$route.params.id
      }).then((res) => {
//        this.message = res.data.data
        this.resultBody = Marked(res.data.data.article_content, { renderer: Renderer })
      })
    }
  }
</script>

<style>
@import "../../../static/common/article_markdown.css";

</style>
