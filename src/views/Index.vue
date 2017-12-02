<template>
  <div class="ching-index-layout">
    <!--header-->
    <div class="ching-header" >
      <span class="ching-header-title" @click="$router.push('/')">
        Ching
      </span>
      <!--<span class="ching-header-about-me" @click="showMeVisible = !showMeVisible">-->
        <!--关于-->
      <!--</span>-->
    </div>

    <div class="ching-navigator">
      <ul>
        <!--<li class="selected">IT弄潮儿</li>-->
        <!--<li>最好的她</li>-->
      </ul>
    </div>

    <div class="ching-content">
      <el-row  align="flex-start" >
        <!--左侧文章列表-->
        <el-col :span="24" >
          <div class="ching-index-content-wrapper">
            <div v-for=" article in articleList" class="ching-index-content">
              <div v-if="article.id !== undefined" class="content-item-wrapper" @click="articleDetail(article.id)">
                <!--<span>{{article.createTime}}</span>-->
                <div class="content-item-title">{{article.title}}</div>
                <div class="content-item-line"></div>
                <div class="content-item-content">{{article.outLine}}......</div>
                <div class="content-item-end">
                  <span class="fa fa-eye"> {{article.views}} clicks</span>
                  <span class="fa fa-clock-o"> {{article.createTime}}</span>
                  <!--<span class="article-views">{{article.views}} views</span>-->
                  <!--<span class="article-time">{{article.createTime}}</span>-->
                </div>
              </div>
              </span>
            </div>
            <div @click="handleCurrentChange()" class="ching-index-load-more" v-loading="loadingFlag"><span>{{loadMoreText}}</span></div>
          </div>
          <!--分页-->
        <!--  <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="page.currentPage"
            :page-size="page.pageSize"
            layout="total, prev, pager, next"
            :total="page.totalRows">
          </el-pagination>-->
        </el-col>
       <!-- <el-col :span="6" class="ching-index-right-wrapper">
          &lt;!&ndash;右侧我的信息&ndash;&gt;
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
        </el-col>-->
      </el-row>
    </div>

    <el-dialog
      title="AboutMe"
      size="large"
      :visible.sync="showMeVisible">
      <img src="../../statics/images/user_default.jpg">
        <div class="ching-header-about-me-text">
          <span>I'm SonnyChing,Chi is My Son, You are Always Be Mine,And I Miss You.</span>
          <div>email:837551773@qq.com</div>
          <span slot="footer" class="dialog-footer"></span>
        </div>
    </el-dialog>

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
//  import {Marked, Renderer} from '../../statics/common/markdown'
  import { Dialog, Row, Col, Loading } from 'element-ui'
  import $ from 'jquery'

  export default {
    name: 'hello',
    data () {
      return {
        articleList: [],
        currentPage: 0,
        page: {},
        loadingFlag: true,
        loadMoreText: '加载更多',
        showMeVisible: false
      }
    },
    components: {
      'el-dialog': Dialog,
      'el-row': Row,
      'el-col': Col
    },
    directives: {
      Loading
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
      articleDetail (id) {
        //  加载动画
//        this.$nextTick(function () {
//          $('#ching-index-Loading-img').show()
//        })
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
      },
      handleSizeChange (val) {
//        console.log(`每页 ${val} 条`)
      },
      //  切换页码
      handleCurrentChange (val) {
        if (this.page.hasNextPage === false) {
          this.loadMoreText = '🌚 老铁我跟你港啊，没饭了...'
          return
        }

        this.loadingFlag = true

        this.currentPage++
        this.$http.post(API.articleList, {currentPage: this.currentPage})
          .then((res) => {
            var tempList = res.data.data.list

            if (tempList === undefined || tempList.length <= 0) {
              this.loadMoreText = '没有更多啦 ╮(￣▽￣)╭'
              this.currentPage--
              this.loadingFlag = false
              return
            }

//            for (var i = 0; i < tempList.length; i++) {
//              const content = tempList[i].content
//              const result = Marked(content, { renderer: Renderer })
//              tempList[i].content = this.removeHTMLTag(result)
//            }

            for (var j = 0; j < tempList.length; j++) {
              this.articleList.push(tempList[j])
            }

//            this.articleList = tempList

            this.page = res.data.data
            this.loadingFlag = false
            this.loadMoreText = '老板娘，加饭 (～￣▽￣)～'
//            scrollTo(0, 0)
          })
          .catch(() => {
//            console.log(error)
            this.loadingFlag = false
            this.loadMoreText = '我也好着急，但素就是加载不出来嘛！ 😱'
            this.currentPage--
          })
      }
    },
    mounted () {
      this.loadingFlag = true
      this.currentPage++

      this.$http.post(API.articleList, {currentPage: this.currentPage})
        .then((res) => {
          var tempList = res.data.data.list

          if (tempList === undefined || tempList.length <= 0) {
            this.loadMoreText = '🌚 纳尼，服务器又挂了嘛，真是见鬼了'
            this.loadingFlag = false
            this.currentPage--
            return
          }

          /* for (var i = 0; i < tempList.length; i++) {
            const content = tempList[i].content
            const result = Marked(content, { renderer: Renderer })
            tempList[i].content = this.removeHTMLTag(result)
          } */

          this.articleList = tempList
          this.page = res.data.data
          this.loadingFlag = false
          this.loadMoreText = '老板娘，加饭 (～￣▽￣)～'
        })
        .catch(() => {
//          console.log(error)
          this.loadingFlag = false
          this.loadMoreText = '/(ㄒoㄒ)/~~我也好着急，但素就是加载不出来嘛！要不再戳我试试！'
          this.currentPage--
        })
      document.title = 'SonnyChing的个人博客'
      //  加载完成
      this.$nextTick(function () {
        $('#ching-index-Loading-img').hide()
      })
    }
}
</script>
<style scoped>
  @import "../../statics/fontawesome/css/font-awesome.min.css";

  .ching-index-layout{
    /*min-width: 400px;*/
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
    height: 3rem;
    /*margin-bottom: 0.1rem;*/
    position: fixed;
    z-index: 9999;
    color: white;
  }
  .ching-header-title{
    line-height: 3rem;
    margin: 0 1rem;
    font-size: 1.5rem;
    font-family: Cursive,Lucida Grande, Lucida Sans Unicode, Helvetica, Arial, Verdana, sans-serif;
  }

  .ching-header-about-me{
    float: right;
    line-height: 3.6rem;
    margin: 0 1rem;
  }


  .ching-navigator{
    width:100%;
    /*background-color: #EFCEE8;*/
    /*height: 2rem;*/
    margin-bottom: 0rem;
    height: 2.7rem;
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
    /*width:80%;*/
    /*margin:2.6rem auto 0rem auto;*/
    max-width: 1080px;
    margin:0 auto;

    /*min-width: 690px;*/
    /*padding: 1rem;*/
    /*margin-top: 3.6rem;*/
    /*box-shadow: 1px 1px 1px #888888;*/
  }
  .ching-content-bg {
    background: url("../../statics/images/bg-index-content.png") no-repeat;
    background-size:100% 100%;
    overflow: hidden;
    /*background-size:cover;*/
  }

  .content-item-wrapper{
    padding: 0rem 0.4rem;
  }

  .ching-index-flex-box{
    /*width: 100%;*/
    /*margin:0 auto;*/
  }


  .ching-index-content-wrapper{
    /*background-color: white;*/
    /*background-color: #ff3a44;*/
    /*border: 1px solid #eeeeee;*/
    /*width: 100%;*/
    /*padding: 0.4rem 0.6rem;*/
  }

  .ching-index-right-wrapper{
    margin: 0rem 0rem 0rem 2rem;
    padding:0.5rem;
    max-width: 13rem;
    background-color: white;
    /*background-color: #FDFFDF;*/

  }

  /*文章列表*/
  .ching-index-content{
    font-family: Lucida,Helvetica, Arial, Verdana, sans-serif;
    /*font-family: "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif;*/
    color: #575757;
    /*width:100%;*/
    margin:0.6rem auto ;
    background-color: white;
    /*margin: 0.5rem 0rem;*/
    padding: 1.2rem 0rem;
    max-width: 50rem;
    line-height: 1.3rem;
    border-bottom:0.05rem solid #dadada;
    word-break: break-all;
    border-left: 0.2rem solid #aedeee;

    /*box-shadow: 0rem 0.1rem 0.1rem #888888;*/
    /*border: 1px solid #EFCEE8;*/
    /*border-bottom: 1px solid #eeeeee;*/
    /*border-radius: 0.5rem;*/

  }

  .ching-index-content:hover{
    cursor: pointer;
    /*background-color: #DAF9CA;*/
    /*color: #7e57c2;*/
    /*color: #929292;*/
    /*background-color: #e7e7e7;*/
    /*max-width: 51rem;*/
    box-shadow: 0.3rem 0.3rem 0.5rem #e7e7e7;

  }

  .content-item-title{
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 0.8rem;
    padding: 0 2rem;
    margin-left: 1rem;
    line-height: 1.9rem;
    background: url("../../statics/images/arrow.png") no-repeat;
  }

  .content-item-content{
    font-size: 1.0rem;
    font-weight: 300;
    line-height: 1.8rem;
    padding: 0 1rem;
  }

  .content-item-end{
    overflow: hidden;
  }

  .content-item-end span{
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    margin-right: 1rem;
    font-size: 0.8rem;
    color: #767676;
    float: right;
    padding: 0.2rem 0rem 0.2rem 1.7rem;
  }

  .article-time{
    background: url(../../statics/images/clock.png) no-repeat left center;
  }

  .article-views{
    background: url(../../statics/images/eye.png) no-repeat left center;
  }



  .article-type{
    background-color: #5bdef5;
    /*background-image: url("../../statics/images/bubble.png");*/
    background-size:100% 100%;
    color: #ffffff;
    font-size: 0.1rem;
    padding:0.4rem;
    border-radius: 1rem;
  }

  /*右侧区域*/

  .ching-index-right-abaout-me{
    width: 100%;
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

  .ching-index-load-more{
    text-align: center;
    width: 100%;
    margin: 1rem 0;
  }
  .ching-index-load-more span{
    margin: 3rem;
    color: #929292;
    line-height: 1.6rem;
    font-size: 1.0rem;
  }

  .ching-index-load-more span:hover{
    color: #bdbdbd;
    cursor: pointer;
  }

  .ching-header-title:hover{
    cursor: pointer;
  }

  .ching-header-about-me-text{
    font-size: 1rem;
    line-height: 1.4rem;
    word-break: break-all;
    text-indent: 2rem;
  }

  .ching-header-about-me-text img{
    margin:0 auto;
  }


</style>
