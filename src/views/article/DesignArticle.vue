<template>
  <div class="article-container">
    <div class="article_input_area">
      <input type="text" class="markdown-editor-header" autofocus v-model="articleTitle" placeholder="标题"/>
      <!--<ol class="toolbar">-->
      <!--<li @click="toggle">保存</li>-->
      <!--</ol>-->
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
        <mu-select-field v-model="articleType" label="选择文章的类别" v-for="type in types">
          <mu-menu-item :value="type.id" :title="type.name" />
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
          if (res.data.code > 0) {
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
        if (res.data.code > 0) {
          this.typelist = res.data.data
        }
      })
    }
  }
</script>

<style>
@import "../../../static/common/article_markdown.css";

  .article-container{
    width:100%;
    height: 100%;
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
    border-bottom: 1px solid #b7b7b7;
    font-family: -apple-system, "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  }

  .article-container .toolbar{
    width:100%;
    height:30px;
    background-color: #dedede;
    border-bottom: 1px solid #d9d9d9;
    margin: 0px;
  }

  .toolbar li{
    float: right;
    line-height: 30px;
    padding: 0px 5px;
    background-color: #ededed;
    list-style-type: none;
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
    height: 521px;
    font-size: 16px;
    line-height: 20px;
    overflow-x:auto;
  }

  .popup-add-type{
    text-align: center;
  }

  .add_article_save-button{
    /*margin: 5px;*/
    width:100%;
    text-align: center;
  }
</style>
