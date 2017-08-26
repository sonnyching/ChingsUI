<template>
  <div class="article-container">
    <div class="article_input_area">
      <textarea class="markdown-editor" v-model="articleSource"></textarea>
    </div>
    <div v-html="resultBody" class="article_show_area"></div>
  <div class="clearfix"></div>
  </div>

</template>

<script type="text/ecmascript-6">
//  import marked from 'marked'
  import {Marked, Renderer} from '../../../static/common/markdown'
  export default {
    data () {
      return {
        message: {},
        articleSource: ''
      }
    },
    computed: {
      resultBody () {
        var result = Marked(this.articleSource, { renderer: Renderer })
        return result
      }
    },
    methods: {
    },
    mounted () {
    }
  }
</script>

<style>
@import "../../../static/common/article_markdown.css";

  .article-container{
    width:100%;
    height: 100%;
  }

  .markdown-editor{
    width:100%;
    margin-bottom: 0;
    border: none;
    resize: none;
    color: #2f2f2f;
    font-size: 16px;
    font-weight: normal;
    line-height: 30px;
    min-height: 400px;
    padding:10px;
    outline:none;
  }

  .article_input_area {
    width: 50%;
    height: 100%;
    float: left;
  }

  .article_show_area{
    width:50%;
    background-color: #fcfaf2;
    padding:10px;
    float: left;
    min-height: 400px;
  }


</style>
