<template>
  <div class="article-design-container">
    <el-row align="flex-start">
      <el-col :span="12" >
        <input type="file" id="article_upload_image" accept="image/png,image/gif,image/jpeg" @change="uploadpic($event)" style="display: none">
        <input type="text" id="markdown-editor-header" class="markdown-editor-header" autofocus v-model="articleTitle" placeholder="标题"/>
        <ul class="toolbar" id="article-add-toolbar">
          <li @click="insertImage" class="fa fa-picture-o"></li>
          <li @click="save" class="fa fa-floppy-o"></li>
        </ul>
        <textarea id="articleSourceObj" class="markdown-editor" v-model="articleSource" placeholder="请输入文章内容..."></textarea>
      </el-col>
      <el-col :span="12" class="">
        <div v-html="resultBody" id="articleSourceShow" class="article_show_area"></div>
      </el-col>
    </el-row>

    <div class="clearfix"></div>

  </div>

</template>


<script type="text/ecmascript-6">
  import URL from '../../utils/Interface'
  import {Marked, Renderer} from '../../../statics/common/markdown'
  import axios from 'axios'
  import $ from 'jquery'
  import constant from '../../constant/constant.js'
  import {Row, Col} from 'element-ui'
//  import '../../../statics/third/flextext/jquery.flexText.min'
//  import '../../../statics/third/flextext/style.css'

  export default {
    components: {
      'el-row': Row,
      'el-col': Col
    },
    data () {
      return {
        message: {},
        articleSource: '',
        articleTitle: '',
        areaTextObj: ''
      }
    },
    computed: {
      resultBody () {
        var result = Marked(this.articleSource, { renderer: Renderer })
        return result
      }
    },
    methods: {
      insertImage () {
        $('#article_upload_image').click()
      },
      uploadpic (event) {
        //  构造虚拟form
        var file = event.target.files[0]
        var formdata = new FormData()
        formdata.append('file', event.target.files[0])
        formdata.append('image', event.target.files[0])
//        console.log(this.file.width)

        //  获取图片原始宽高
        var width = 0
        var height = 0

        var reader = new FileReader()
        var self = this
        reader.onload = function (e) {
          var data = e.target.result
          var image = new Image()
          image.onload = function () {
            //  获取图片原始宽高
            width = image.width
            height = image.height
            console.log(width + ',' + height)

            //  重新计算宽高
            var reWidth = 0
            var reHeight = 0

            //  以宽度350计算，重新计算图片默认宽高
            reWidth = 300
            reHeight = Math.round(height * reWidth / width)

            //  开始上传
            axios({
              url: '/api/upload/image',
              method: 'post',
              data: formdata,
              headers: {'Content-Type': 'multipart/form-data'}
            }).then((res) => {
              if (res.data.code !== 0) {
                alert(res.data.info)
              } else {
                var imgCode = '![' + reWidth + ',' + reHeight + '](' + constant.server_ip + res.data.data + ')'

                self.articleSource = self.articleSource + ' \n ' + imgCode
              }
            }).catch(() => {
              alert('图片上传失败')
            })
          }
          image.src = data
        }
        reader.readAsDataURL(file)
      },
      save () {
        if (this.articleTitle === '') {
          alert('请输入文章标题')
          return
        }
        if (this.articleSource === '') {
          alert('请输入文章内容')
          return
        }
        this.$http.post(URL.editArticle, {
          title: this.articleTitle,
          content: this.articleSource,
          id: this.$route.params.articleId
        }).then((res) => {
          if (res.data.code === 0) {
            alert('保存成功！')  //  articleId
            this.$router.push({path: '/article/detail/' + this.$route.params.articleId})
          } else {
            alert('保存失败')
          }
        })
      }
    },
    mounted () {
      this.$http.post(URL.articleDetail, {
        article_id: this.$route.params.articleId
      }).then((res) => {
        if (res.data.code !== 0) {
          alert('数据加载失败')
          return
        }
        this.articleSource = res.data.data.content
        this.articleTitle = res.data.data.title
      })

      var editDivHeight = $('#articleSourceObj').offset().top
      var bodyHeight = window.screen.availHeight
      var titleHeight = $('#markdown-editor-header').outerHeight()
      var toolBarHeight = $('#article-add-toolbar').outerHeight()

      $('#articleSourceObj').height(bodyHeight - editDivHeight)
      $('#articleSourceShow').height(bodyHeight - editDivHeight + titleHeight + toolBarHeight)

//      console.log(editDivHeight)
    }
  }
</script>

<style>
@import "../../../statics/common/article_markdown.css";
@import "../../../statics/css/hightlight_styles/androidstudio.css";
@import "../../../statics/fontawesome/css/font-awesome.min.css";

  .article-design-container{
    magin:0 0.5rem;
  }

  .markdown-editor-header{
    width:90%;
    border: 0px;
    height:2.5rem;
    font-size: 30px;
    padding: 0.5rem 5%;
    /*padding: 10rem;*/
    outline: none;
    color: #555555;
    font-weight: 400;
    font-family: -apple-system, "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  }

  .article-design-container .toolbar{
    /*width:90%;*/
    height:30px;
    background-color: #f9c6f1;
    margin: 0px;
    overflow: hidden;
  }

  .toolbar li{
    height: 100%;
    float: right;
    line-height: 30px;
    padding: 0 0.5rem 0;
    list-style-type: none;
  }

  .toolbar li:hover {
    color: white;
    background-color: #555555;
    cursor: pointer;
  }

  .markdown-editor{
    width:96%;
    height: 100%;
    margin-bottom: 0;
    border: none;
    resize: none;
    color: #2f2f2f;
    font-size: 16px;
    font-weight: normal;
    line-height: 30px;
    /*height: 460px;*/
    padding:2%;
    outline:none;
  }

  .article_show_area{
    width:95%;
    height: 100%;
    background-color: #fcfaf2;
    /*background-color: #fc3f75;*/
    overflow-y: auto;

    padding:2%;
    font-size: 16px;
    line-height: 20px;
  }

</style>
