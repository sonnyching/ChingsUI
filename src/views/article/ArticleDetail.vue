<template>
  <div class="article-detail-container">
    <ol class="ching-article-detail-menu-h1" @click="toggleMenu()">目录</ol>
    <div style="border: 1px solid " v-show="menuIsShow" v-html="menuList"/>
    <div class="article-detail-body">
      <div class="article_detail_title">{{title}}</div>
      <div class="article_detail_header"> <span class="header-time">{{time}}</span></div>
      <div v-html="resultBody" class="article-content"></div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import URL from '../../utils/Interface'
  import {Marked, Renderer} from '../../../statics/common/markdown'
  import $ from 'jquery'

  export default {
    data () {
      return {
        resultBody: '',
        title: '',
        author: '',
        time: '',
        menuList: '',
        menuIsShow: true
      }
    },
    methods: {
      createMenu () {
        var str = ''
        $('.article-detail-body').find('h1,h2,h3,h4,h5,h6').each(function (i, item) {
          var tagName = $(item).get(0).localName
          $(item).attr('id', 'ching-article' + i)
          str += '<ol class=" detail-menu anchor-link ching-article-detail-menu-' + tagName + '" link="#ching-article' + i + '">' + $(item).text() + '</ol>'
        })
        this.menuList = str

        this.$nextTick(function () {
          $('.anchor-link').click(function () {
            $('html,body').animate({scrollTop: $($(this).attr('link')).offset().top - $($(this).attr('link')).outerHeight(true)}, 1000)
          })
        })
      },
      toggleMenu () {
//        $('.anchor-link').hide()
        this.menuIsShow = !this.menuIsShow
      }
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
        this.time = res.data.data.createTime
        document.title = this.title
        this.$nextTick(function () {
          this.createMenu()
        })
      })

      //  异步更新浏览次数
      this.$http.post(URL.updateViews, {
        articleId: this.$route.params.id
      }).then((res) => {
//        console.log(res.data)
      })
    }
  }
</script>

<style>
@import "../../../statics/common/article_markdown.css";
@import "../../../statics/css/hightlight_styles/androidstudio.css";

@media screen and (max-width: 600px) {
  .article-detail-container{
    width:99%;
    max-width: 960px;
    /*min-width: 640px;*/
    margin: 0rem auto;
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  .article-detail-body{
    /*border:2px solid #f9f6cf;*/
    /*box-shadow: 1px 1px 1px #c4c4c4;*/
    background-color: white;
    border:1px solid #eeeeee;
    padding: 1rem 0.5rem;
    margin:0 auto;
    border-radius: 1px;
  }

  .article_detail_title{
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
  }

  .article_detail_header{
    margin: 1rem;
    text-align: center;
    font-size: 0.7rem;
  }

  .header-time{
    /*padding: 0.4rem 1.6rem;*/
    /*background: url("../../../statics/images/clock.png" ) no-repeat left;*/
  }

}

@media screen and (min-width: 601px) {
  .article-detail-container{
    width:100%;
    max-width: 960px;
    /*min-width: 640px;*/
    margin: 0rem auto;
    padding-top: 3.1rem;
    padding-bottom: 2rem;
  }

  .article-detail-body{
    /*border:2px solid #f9f6cf;*/
    /*box-shadow: 1px 1px 1px #c4c4c4;*/
    background-color: white;
    border:1px solid #eeeeee;
    padding: 2rem;
    margin:0 auto;
    border-radius: 1px;
    font-size: 1rem;
  }

  .article_detail_title{
    font-size: 2rem;
    text-align: center;
    font-weight: 400;
  }

  .article_detail_header{
    margin: 1.2rem;
    text-align: center;
  }


}

</style>
