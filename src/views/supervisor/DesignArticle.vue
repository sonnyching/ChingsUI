<template>
  <div class="article-design-container">
    <div class="article_input_area">
      <input type="file" id="article_upload_image" accept="image/png,image/gif,image/jpeg" @change="uploadpic($event)" style="display: none">
      <input type="text" class="markdown-editor-header" autofocus v-model="articleTitle" placeholder="标题"/>
      <ol class="toolbar">
        <li @click="insertImage" class="fa fa-picture-o"></li>
        <li class="fa fa-floppy-o"></li>
      </ol>
      <textarea class="markdown-editor" v-model="articleSource" placeholder="请输入文章内容..."></textarea>
    </div>
    <div v-html="resultBody" class="article_show_area"></div>

    <div class="clearfix"></div>

    <mu-raised-button label="立即发表" class="add_article_save-button" primary @click="toggle"/>

    <mu-popup position="center" :open="showWindow" @close="toggle">
      <mu-appbar title="类别">
        <mu-flat-button slot="right" label="关闭" color="white" @click="toggle"/>
      </mu-appbar>
      <mu-content-block class="popup-add-type">
        <mu-select-field v-model="articleType" label="选择文章的类别" >
          <mu-menu-item :value="type.id" :title="type.name" v-for="type in types" />
        </mu-select-field>
        <div>
          <mu-icon value="add" :size="32" @click="addType"/>
        </div>
        <div>
          <mu-text-field hintText="请输入新标签名" v-if="showNewTypeInput" v-model="newTypeName"/><br/>
        </div>
        <mu-raised-button label="保存文章" class="demo-raised-button" primary  @click="save"/>

      </mu-content-block>
    </mu-popup>

  </div>

</template>


<script type="text/ecmascript-6">
  import URL from '../../utils/Interface'
  import {Marked, Renderer} from '../../../static/common/markdown'
  import axios from 'axios'
  import $ from 'jquery'
  import constant from '../../constant/constant.js'
  export default {
    data () {
      return {
        message: {},
        articleSource: '',
        articleTitle: '',
        articleType: '',
        typelist: '',
        newTypeName: '',
        showWindow: false,
        showNewTypeInput: false
      }
    },
    computed: {
      resultBody () {
        var result = Marked(this.articleSource, { renderer: Renderer })
        return result
      },
      types () {
        if (this.typelist === '' || this.typelist === undefined) {
          return [{ id: '', name: '请选择' }]
        } else {
          return this.typelist
        }
      }
    },
    methods: {
      toggle () {
        this.showWindow = !this.showWindow
      },
      addType () {
        this.showNewTypeInput = !this.showNewTypeInput
      },
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
        if (this.articleType === '' && this.newTypeName === '') {
          alert('请选择文章类别')
          return
        }
        this.$http.post(URL.articleAdd, {
          title: this.articleTitle,
          content: this.articleSource,
          type: this.articleType,
          newTypeName: this.showNewTypeInput ? this.newTypeName : '' // 如果不显示新标签框，说明不需要添加新标签
        }).then((res) => {
          if (res.data.code === 0) {
            alert('发表成功！')  //  articleId
            this.$router.push({path: '/article/detail/' + res.data.info})
          } else {
            alert('发表失败')
          }
        })
      }
    },
    mounted () {
      this.$http.post(URL.articleTypes, {
      }).then((res) => {
        if (res.data.code === 0) {
          this.typelist = res.data.data
        }
      })
    }
  }
</script>

<style>
@import "../../../static/common/article_markdown.css";
@import "../../../static/css/hightlight_styles/androidstudio.css";
@import "../../../static/fontawesome/css/font-awesome.min.css";

  .article-design-container{
    width:95%;
    height: 100%;
    margin: 0 30px;
  }

  .markdown-editor-header{
    width:100%;
    border: 0px;
    height:50px;
    font-size: 30px;
    padding: 30px 30px;
    outline: none;
    color: #555555;
    font-weight: 400;
    /*border-bottom: 1px solid #b7b7b7;*/
    font-family: -apple-system, "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  }

  .article-design-container .toolbar{
    width:100%;
    height:30px;
    background-color: #f9c6f1;
    /*border-bottom: 1px solid #d9d9d9;*/
    margin: 0px;
  }

  .toolbar li{
    /*width: 30px;*/
    height: 100%;
    float: right;
    line-height: 30px;
    padding: 0px 10px;
    /*background-color: #ededed;*/
    list-style-type: none;
    /*background:url('../../../static/favicon.ico') no-repeat 4px 5px;*/
  }

  .toolbar li:hover {
    color: white;
    background-color: #555555;
    cursor: pointer;
  }

  .markdown-editor{
    width:100%;
    height: 100%;
    margin-bottom: 0;
    border: none;
    resize: none;
    color: #2f2f2f;
    font-size: 16px;
    font-weight: normal;
    line-height: 30px;
    height: 460px;
    padding:10px;
    outline:none;
  }

  .article_input_area {
    width: 50%;
    /*height: 460px;*/
    float: left;
  }

  .article_show_area{
    width:50%;
    background-color: #fcfaf2;
    padding:10px;
    float: left;
    height: 550px;
    font-size: 16px;
    line-height: 20px;
    overflow-x:auto;
  }

  .popup-add-type{
    text-align: center;
  }

  .add_article_save-button{
    margin: 10px 0px;
    width:100%;
    text-align: center;
  }
</style>
