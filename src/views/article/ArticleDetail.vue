<template>
  <div class="article-container">
    <div v-html="resultBody"></div>
  </div>

</template>

<script type="text/ecmascript-6">
//  import $ from 'jquery'
//  import showdown from 'showdown'
  import marked from 'marked'
  import URL from '../../utils/Interface'
//  import highlight from 'highlight.js'
  export default {
    data () {
      return {
        message: {},
        resultBody: ''
      }
    },
    methods: {
      compile () {
        marked.setOptions({
          renderer: new marked.Renderer(),
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: true,
          sanitize: true,
          smartLists: true,
          smartypants: true
        })
//        marked.setOptions({
//          highlight: function (code) {
//            return require('highlight.js').highlightAuto(code).value;
//          }
//        })
        var renderer = new marked.Renderer()

        renderer.code = function (text, lang) {
//          var language = lang && (' language-' + lang) || ''
          return '<pre class="code_style">' + '<code>' + text + '</code>' + '</pre>'
        }

        renderer.list = function (body, ordered) {
          return '<ul class="mark_ul_style">' + body + '</ul>'
        }

        renderer.listitem = function (text) {
          return '<li class="mark_li_style">' + text + '</li>'
        }

        this.resultBody = marked(this.message.article_content, { renderer: renderer })
        console.log(this.resultBody)
      }
    },
    mounted () {
      this.$http.post(URL.articleDetail, {
        article_id: this.$route.params.id
      }).then((res) => {
        this.message = res.data.data
        this.compile()
      })
    }
  }
</script>

<style>

  .code_style{
    width:100%;
    background-color: #b7b7b7;
    padding:20px;
  }


  .mark_ul_style{
  }

  .mark_li_style{
    color: #f9b6c6;
  }

</style>
