<template>
    <div class="supervisor-articles">
      <div>

        <el-table
          :data="articles"
          stripe
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号"
            width="80">
          </el-table-column>
          <el-table-column
            label="状态"
            width="80">
            <template scope="scope">
              <span>{{scope.row.status===1?'上架中':'已下架'}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="title"
            label="文章标题"
            width="360">
          </el-table-column>
          <el-table-column
            label="操作">
            <template scope="scope">
              <div class="article-operation-tools">
                <i class="fa fa-eye tool-article-detail" @click="articleDetail(scope.row.id)"/>
                <i class="fa fa-pencil tool-article-edit" @click="editArticle(scope.row.type,scope.row.id)"/>
                <i class="fa fa-trash-o fa-lg tool-article-delete" @click="deleteArticle(scope.row.id)"/>
                <i class="fa fa-toggle-off " @click="articleOff(scope.row.id)"/>
                <i class="fa fa-toggle-on " @click="articleOn(scope.row.id)"/>
              </div>
            </template>
          </el-table-column>
        </el-table>

      </div>

    </div>
</template>

<script type="text/ecmascript-6">
  import URL from '../../utils/Interface'
  export default {
    data () {
      return {
        articles: [],
        selectable: true,
        multiSelectable: true,
        enableSelectAll: false,
        showCheckbox: true,
        height: 'auto',
        total: 130,
        current: 1,
        showSizeChanger: true,
        selectKeyWords: ''
      }
    },
    methods: {
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      },
      handleClick () {
      },
      articleDetail (id) {
        window.open('/#/article/detail/' + id)
      },
      editArticle (typeId, articleId) {
        this.$router.push({
          name: 'DesignArticle',
          params: {
            typeId: typeId,
            articleId: articleId
          }
        })
      },
      articleOff (id) {
        this.$http.post(URL.articleOff, {
          articleId: id
        }).then((res) => {
          if (res.data.code === 0) {
            alert('下架处理成功！')
          } else {
            alert('下架处理失败！')
          }
        })
      },
      articleOn (id) {
        this.$http.post(URL.articleOn, {
          articleId: id
        }).then((res) => {
          if (res.data.code === 0) {
            alert('上架成功！')
          } else {
            alert('上架失败！')
          }
        })
      },
      deleteArticle (id) {
//        this.$http.post(URL.deleteArticle, {
//          id: id
//        }).then((res) => {
//          if (res.data.code === 0) {
//            alert('删除成功！')
//          } else {
//            alert('删除失败！')
//          }
//        })
      }
    },
    mounted () {
      this.$http.post(URL.supervisor.managerArticles, {
        keywords: this.selectKeyWords
      }).then((res) => {
        this.articles = res.data.data
      })
    }
  }
</script>

<style>
  @import "../../../statics/fontawesome/css/font-awesome.min.css";
  .supervisor-articles{
    width:95%;
  }

  .supervisor-articles-table{
    margin:0 auto;
    max-width: 95%;
  }

  .article-operation-tools i{
    /*margin-right: 1.5rem;*/
    /*padding:2rem;*/
    margin: 0.3rem;
    padding: 0.3rem;
  }

  .tool-article-detail:hover{
    background-color: #7e57c2;
  }

  .tool-article-edit:hover{
    background-color: #c283a2;

  }
  .tool-article-delete:hover{
    background-color: #5ac2b8;
  }

</style>

</style>
