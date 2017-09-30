<template>
    <div class="supervisor-articles">
      <div>
        <mu-table :height="height" class="supervisor-articles-table"
                  :fixedFooter="true"
                  :showCheckbox="false">
          <mu-thead slot="header">
            <mu-tr>
              <mu-th tooltip="序号">序号</mu-th>
              <mu-th tooltip="文章名称">文章名称</mu-th>
              <mu-th tooltip="操作1">查看</mu-th>
              <mu-th tooltip="操作2">编辑</mu-th>
              <mu-th tooltip="操作3">删除</mu-th>
            </mu-tr>
          </mu-thead>
          <mu-tbody>
            <mu-tr v-for="item,index in articles"  :key="index" >
              <mu-td>{{index + 1}}</mu-td>
              <mu-td class="texthidden">{{item.title}}</mu-td>
              <mu-td class="article-operation-tools">
                <i class="fa fa-eye tool-article-detail" @click="articleDetail(item.id)"/>
              </mu-td>
              <mu-td class="article-operation-tools">
                <i class="fa fa-pencil tool-article-edit" @click="editArticle(item.type,item.id)"/>
              </mu-td>
              <mu-td class="article-operation-tools">
                <i class="fa fa-trash-o fa-lg tool-article-delete" @click="deleteArticle(item.id)"/>
              </mu-td>
                <!--<i class="fa fa-eye tool-article-detail" @click="articleDetail(item.id)"/>-->
                <!--<i class="fa fa-pencil fa-fw tool-article-edit" @click="editArticle(item.type,item.id)"/>-->
                <!--<i class="fa fa-trash-o fa-lg tool-article-delete" @click="deleteArticle(item.id)"/>-->
              </mu-td>
            </mu-tr>
          </mu-tbody>
          <mu-tfoot slot="footer" >
            <mu-pagination style="float: right" :total="total" :showSizeChanger="showSizeChanger" @pageSizeChange="handleClick">
            </mu-pagination>
          </mu-tfoot>
        </mu-table>
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
    padding:0.5rem;

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

  .texthidden{
    max-width:200px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
</style>

</style>
