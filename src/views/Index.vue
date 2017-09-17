<template>
  <div class="layout">

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
        <li class="selected">IT弄潮儿</li>
        <li>最好的她</li>
      </ul>
    </div>

    <div class="ching-content ching-content-bg">
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
        </mu-flexbox-item style="width:100%">
        <mu-flexbox-item class="ching-index-right-wrapper">
          <div>
            <div class="ching-index-right-abaout-me">
              <img src="../../static/images/user_default.jpg" />
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

    <div class="ching-footer">

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
      },
      url (url) {
        window.open(url)
      }
    },
    mounted () {
      this.$http.post(API.articleList, {currentPage: this.currentPage})
        .then((res) => {
          var tempList = res.data.data.list
//          var item = {createTime: 'The Begining'}
//          tempList.push(item)
          this.articleList = tempList
        })
        .catch((error) => {
          console.log(error)
        })
    }
}
</script>
<style scoped>
  @import "../../static/fontawesome/css/font-awesome.min.css";

  .layout{
    min-width: 400px;
    max-width: 900px;
    width: 85%;
    margin:0 auto;
    /*cursor:url("../../static/images/cursor.png");*/
  }

  .ching-header{
    width:100%;
    background-color: #C7B3E5;
    height: 5rem;
    margin-bottom: 0.1rem;
  }
  .ching-header-title{
    line-height: 5rem;
    margin: 0 1.5rem;
    font-family: Cursive,Lucida Grande, Lucida Sans Unicode, Helvetica, Arial, Verdana, sans-serif;
    font-size: 1.5rem;
  }

  .ching-navigator{
    width:100%;
    background-color: #EFCEE8;
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

  .ching-footer{
    width:100%;
    height: 6rem;
    background-color: #6A8759;
    margin-top: 0.5rem;
  }

  .ching-content{
    background-color: white;
    padding:0rem 1.4rem 1rem 1.4rem;
  }
  .ching-content-bg {
    background: url("../../static/images/bg-index-content.png") no-repeat;
    background-size:100% 100%;
    overflow: hidden;
    /*background-size:cover;*/
  }

  .ching-index-flex-box{
    width: 100%;
    margin:0 auto;
  }


  .ching-index-content-wrapper{
    width: 100%;
    margin: 0 1rem ;
    padding: 0.1rem;
  }

  .ching-index-right-wrapper{
    width: 40%;
    margin: 0rem 0rem 1rem 1rem;
    padding:1rem;
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
    border: 1px solid #EFCEE8;
    border-radius: 0.5rem;

  }

  .ching-index-content:hover{
    cursor: pointer;
    background-color: #DAF9CA;
    /*color: #7e57c2;*/
    font-size: large;
    color: #c63ef9;
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
    border-left: 1px solid #F3D7B5;
    border-right: 1px solid #F3D7B5;
    border-top: 1px solid #F3D7B5;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
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



/*  .ching-index-content{
    margin:0rem 0 0 1rem;
    padding: 1rem 1rem 1rem 0rem;
    !*float: left;*!
    !*border-right: 1px solid #f9da9e;*!
    !*margin: 0 auto;*!
    !*background-color: #a5e2f9;*!

  }

  .content-item-wrapper{
    cursor: pointer;
    text-align: center;
    width:100%;
    min-width: 300px;
    max-width: 900px;
    margin: 0.5rem 0rem;
    !*padding-left: 1rem;*!
    border: 1px solid #b187f9;
    border-radius: 0.2rem;
    !*float: left;*!
  }

  .content-item-title {
    font-size: 20px;
    width: 100%;
    text-align: left;
    color: white;
    height: auto;
    line-height: 2rem;
    word-wrap:break-word;
    padding-left: 1rem;
    !*border-left: 0.2rem solid #483f33;*!
    !*border-radius: 1rem;*!
    background-color: #b187f9;
    !*word-break: keep-all;*!

  }

  .content-item-line{
    width:50%;
    //border-bottom: 1px solid #878787;
    margin: 1.2rem 0px;
  }

  .content-item-content{
    width:100%;
    text-align: justify;
    text-justify: inter-ideograph;
    text-indent: 2em;
    font-size: 1rem;
    color: #6b6b6b;
    font-family: '微软雅黑';
    word-wrap:break-word;
    padding:0 1rem;
    line-height: 1.7rem;
  }

  .content-item-end{
    width:100%;
    !*border-bottom: 1px solid #9d9d9d;*!
    margin: 2.2rem 0px;
  }


  .ching-index-about-me{
    width:100%;
    margin: 1rem 1rem 1rem 0.5rem ;
    border: 1px solid #ff1228;
  }*/

</style>
