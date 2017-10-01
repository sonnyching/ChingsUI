<template>
    <div class="new-article-container">

      <el-select v-model="selectType" placeholder="请选择文章类型">
        <el-option
          v-for="type in typelist"
          :label="type.name"
          :value="type.id">
        </el-option>
      </el-select>

      <p></p>

      <el-button type="primary" @click="newArticle()" class="ching-login-raised-button">添加新文章</el-button>

    </div>
</template>

<script type="text/ecmascript-6">
  import URL from '../../utils/Interface'

  export default {
    data () {
      return {
        selectType: '',
        typelist: []
      }
    },
    methods: {
      newArticle () {
        if (this.selectType === '') {
          alert('请选择文章类型')
          return
        }

        this.$http.post(URL.newArticle, {
          typeId: this.selectType
        }).then((res) => {
          if (res.data.code === 0) {
            //  跳转到文章编辑页
            this.$router.push({
              name: 'DesignArticle',
              params: { //  typeId/:articleId
                typeId: this.selectType,
                articleId: res.data.data }
            })
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

  .new-article-container{
    width: 100%;
    height: 100%;
    margin: 10rem auto;
    text-align: center;
  }

  .new-article-content{
    margin: 2rem auto;
  }

  .new-article-container label{
    display: block;
    color: #7e57c2;
    font-size: 1.2rem;
  }


</style>
