<template>
  <div class="ching-index-layout">

    <div class="ching-header" >
      <div class="ching-header-title">
        Ching's Sweet Home
      </div>
      <!--<mu-icon-menu icon="more_vert" style="float: right">-->
        <!--<mu-menu-item title="管理员登陆" to="/user/login"/>-->
      <!--</mu-icon-menu>-->
    </div>

    <div class="ching-navigator">
      <ul>
        <!--<li class="selected">IT弄潮儿</li>-->
        <!--<li>最好的她</li>-->
      </ul>
    </div>

    <div class="ching-content">
      <mu-flexbox align="flex-start" class="ching-index-flex-box">
        <mu-flexbox-item style="width: 100%">
          <div class="ching-index-content-wrapper">
            <div v-for=" article in articleList" class="ching-index-content">
              <!--<span>{{article.createTime}}</span>-->
              <div v-if="article.id !== undefined" class="content-item-wrapper" @click="articleDetail(article.id)">
                <div class="content-item-title">{{article.title}}</div>
                <div class="content-item-line"></div>
                <div class="content-item-content">{{article.content}}......</div>
                <div class="content-item-end"></div>
              </div>
              </span>
            </div>
          </div>
        </mu-flexbox-item>
        <mu-flexbox-item class="ching-index-right-wrapper">
          <div>
            <div class="ching-index-right-abaout-me">
              <img src="../../statics/images/user_default.jpg" />
              <div>我是 Sonny Ching ，头像是我家儿子！我是一名Java软件工程师，现居广州哦。</div>
            </div>
            <div class="click-btns">
              <ul>
                <li class="github">
                  <a href="https://github.com/sonnyching" target="_blank" class="fa fa-github"></a>
                </li>
                <li class="weibo">
                  <a href="https://weibo.com/p/1005051680773925" target="_blank" class="fa fa-weibo"></a>
                </li>
              </ul>
            </div>
          </div>
        </mu-flexbox-item>
      </mu-flexbox>
    </div>

   <!-- <div class="ching-footer">
      <div class="copyright">
        Copyright © 2011-2017 idays.cc
        mail:sonnyching@outlook.com
      </div>

    </div>-->

  </div>
</template>

<script>
  import API from '../utils/Interface'
  import {Marked, Renderer} from '../../statics/common/markdown'

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
      },
      url (url) {
        window.open(url)
      },
      removeHTMLTag (str) {
        str = str.replace(/<\/?[^>]*>/g, '') //  去除HTML tag
        str = str.replace(/[ | ]*\n/g, '\n') //  去除行尾空白
        str = str.replace(/\n[\s| | ]*\r/g, '\n') // 去除多余空行
        str = str.replace(/&nbsp;/ig, '') // 去掉&nbsp;
        return str
      }
    },
    mounted () {
      this.$http.post(API.articleList, {currentPage: this.currentPage})
        .then((res) => {
          var tempList = res.data.data.list
          for (var i = 0; i < tempList.length; i++) {
            const content = tempList[i].content
            const result = Marked(content, { renderer: Renderer })
            tempList[i].content = this.removeHTMLTag(result)
          }

          this.articleList = tempList
        })
        .catch((error) => {
          console.log(error)
        })
    }
}
</script>
<style scoped>
  @import "../../statics/fontawesome/css/font-awesome.min.css";

  .ching-index-layout{
    min-width: 400px;
    /*max-width: 900px;*/
    width: 100%;
    margin:0 auto;
    /*background-color: rgba(248, 248, 248, 0.99);*/
    /*cursor:url("../../static/images/cursor.png");*/
  }

  .ching-header{
    width:100%;
    /*background-color: #C7B3E5;*/
    background-color: #72d4fb;
    height: 3.6rem;
    margin-bottom: 0.1rem;
    position: fixed;

  }
  .ching-header-title{
    line-height: 3.6rem;
    margin: 0 1rem;
    font-family: Cursive,Lucida Grande, Lucida Sans Unicode, Helvetica, Arial, Verdana, sans-serif;
    font-size: 1.5rem;
    color: white;
  }

  .ching-navigator{
    width:100%;
    /*background-color: #EFCEE8;*/
    height: 2rem;
    margin-bottom: 0rem;
  }

  .ching-navigator ul{
    margin: 0px;
    padding:0px;
  }

  .ching-navigator li {
    list-style: none;
    float: left;
    padding: 0 0.5rem;
    line-height: 2rem;
    color: #fcfcfc;
    text-align: center;
  }

  .ching-navigator li:hover {
    /*color: #EFCEE8;*/
    background-color: #F3D7B5;
  }
  .ching-navigator .selected {
    /*color: #EFCEE8;*/
    background-color: #F3D7B5;
  }

  .ching-navigator :first-child{
    /*border-right: 1px solid #e9a8f9;*/
  }

/*  .ching-footer{
    width:100%;
    height: 4rem;
  }

  .ching-footer .copyright{
    background-color: #ccd6d9;
    line-height: 4rem;
    margin:0 auto;
  }*/

  .ching-content{
    padding:0rem 0rem 0rem 0em;
    width:80%;
    margin:2.6rem auto 0rem auto;
    max-width: 1080px;
    min-width: 690px;
    padding: 1rem;
    /*margin-top: 3.6rem;*/
    /*box-shadow: 1px 1px 1px #888888;*/
  }
  .ching-content-bg {
    background: url("../../statics/images/bg-index-content.png") no-repeat;
    background-size:100% 100%;
    overflow: hidden;
    /*background-size:cover;*/
  }

  .ching-index-flex-box{
    width: 100%;
    margin:0 auto;
  }


  .ching-index-content-wrapper{
    background-color: white;
    border: 1px solid #eeeeee;
    width: 100%;
    margin: 0 0rem ;
    padding: 0.4rem;
  }

  .ching-index-right-wrapper{
    width: 30%;
    margin: 0rem 0rem 0rem 2rem;
    padding:0rem;
    background-color: white;
    /*background-color: #FDFFDF;*/

  }

  /*文章列表*/
  .ching-index-content{
    color: #000;
    width:100%;
    background-color: white;
    margin: 1rem 0rem;
    padding: 1.2rem;
    line-height: 1.3rem;
    font-family: '微软雅黑';
    word-break: break-all;
    /*border: 1px solid #EFCEE8;*/
    border-bottom: 1px solid #eeeeee;
    /*border-radius: 0.5rem;*/

  }

  .ching-index-content:hover{
    cursor: pointer;
    /*background-color: #DAF9CA;*/
    /*color: #7e57c2;*/
    font-size: large;
    color: #929292;
  }

  .content-item-title{
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 0.8rem;
  }

  .content-item-content{
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.4rem;
  }



  /*右侧区域*/

  .ching-index-right-abaout-me{
    width: 100%;
    padding:0.5rem;
    margin:0 auto;
    background-color: white;
    text-align: center;
    overflow: hidden;
    border-left: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    border-top: 1px solid #eeeeee;
    /*border-radius: 0.5rem 0.5rem 0rem 0rem;*/
    color: #000;
    font-size: 0.8rem;
    font-weight: 300;

  }

  .ching-index-right-abaout-me div{
    text-align: left;
    text-indent: 2em;
    line-height: 1.5rem;
    margin:1rem 1rem 0 1rem;
  }

  .ching-index-right-abaout-me img{
    width:100%;
    height:13rem;
  }


  .ching-index-right-abaout-me .click-btns{
    width:100%;
    /*overflow: hidden;*/
    background-color: #87130d;
  }

  .click-btns{
    width: 100%;
    text-align: center;
  }

  .click-btns ul {
  /*list-style: none;*/
    width:100%;
    background-color: #5c6370;
    overflow: hidden;
    margin:0;
    padding:0;
  }


  .click-btns ul li{
    margin:0;
    padding:0;
    width:50%;
    list-style: none;
    float: left;
    line-height: 2.5rem;
    background-color: #877d46;
    color: white;
  }

  .click-btns ul li:hover{
    color: #000;
    background-color: #dbdbdb;
    cursor: pointer;
  }

  .click-btns .github{
    background-color: #fff6c8;
  }

  .click-btns .weibo{
    background-color: #ffd9e2;
  }

  .click-btns a{
    width: 100%;
    height: 100%;
  }

</style>
