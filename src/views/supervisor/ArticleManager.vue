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
              <mu-th tooltip="操作">操作</mu-th>
            </mu-tr>
          </mu-thead>
          <mu-tbody>
            <mu-tr v-for="item,index in articles"  :key="index" >
              <mu-td>{{index + 1}}</mu-td>
              <mu-td>{{item.title}}</mu-td>
              <mu-td class="article-operation-tools">
                <i class="fa fa-eye" @click="articleDetail(item.id)"/>
                <i class="fa fa-pencil fa-fw" @click="editArticle(item.id)"/>
                <i class="fa fa-trash-o fa-lg" @click="deleteArticle(item.id)"/>
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
      editArticle (id) {
      },
      deleteArticle (id) {
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
  @import "../../../static/fontawesome/css/font-awesome.min.css";
  .supervisor-articles{
    width:95%;
  }

  .supervisor-articles-table{
    margin:0 auto;
    max-width: 95%;
  }

  .article-operation-tools i{
    margin-right: 1.5rem;
  }

</style>
