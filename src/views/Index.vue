<template>
  <div class="layout">

    <div class="ching-header" >
      <div >

      </div>
      <!--<mu-icon-menu icon="more_vert" style="float: right">-->
        <!--<mu-menu-item title="管理员登陆" to="/user/login"/>-->
      <!--</mu-icon-menu>-->
    </div>

    <div class="ching-navigator">

    </div>

    <div class="ching-content">
      <mu-flexbox align="flex-start" class="ching-index-flex-box">
        <mu-flexbox-item style="width: 100%">
          <div class="ching-index-content-wrapper">
            <div v-for=" article in articleList" class="ching-index-content">
              <span>{{article.createTime}}</span>
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
          var item = {createTime: 'The Begining'}
          tempList.push(item)
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
    min-width: 600px;
    width: 85%;
    margin:0 auto;
  }

  .ching-header{
    width:100%;
    background-color: #6A8759;
    height: 5rem;
    margin-bottom: 0.3rem;
  }

  .ching-navigator{
    width:100%;
    background-color: #872f32;
    height: 2rem;
    margin-bottom: 0.3rem;
  }

  .ching-footer{
    width:100%;
    height: 6rem;
    background-color: #6A8759;
    margin-top: 0.5rem;
  }

  .ching-content{
    background-color: #e2e2e2;

  }

  .ching-index-flex-box{
    width: 100%;
    margin:0 auto;
  }


  .ching-index-content-wrapper{
    width: 100%;
    margin: 1rem;
    padding: 0.1rem;
  }


  .ching-index-right-wrapper{
    width: 40%;
    margin: 1rem 0rem 1rem 1rem;
    padding:1rem
  }


  /*文章列表*/
  .ching-index-content{
    width:100%;
    background-color: white;
    margin: 1rem 0rem;
    padding: 1.2rem;
    line-height: 1.3rem;
    font-family: '微软雅黑';
    word-break: break-all;
  }



  /*右侧区域*/

  .ching-index-right-abaout-me{
    width: 100%;
    padding:0.5rem;
    margin:0 auto;
    background-color: white;
    text-align: center;
    overflow: hidden;
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
