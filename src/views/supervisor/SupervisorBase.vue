<template>
  <div id="chings-supervisor">

    <header class="ching-supervisor-header">
      <!--<mu-icon-button icon="menu" slot="left" @click="toggleMenu(true)" class="supervisor-menu"/>-->
    </header>

    <el-row  :gutter="10" align="flex-start" class="ching-supervisor-container">
      <el-col :span="supervisorLeftWidth" >
        <el-menu default-active="1-4-1" class="ching-supervisor-menu-list"
                 :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">导航</span>
            </template>
            <el-menu-item-group>
              <span slot="title">文章管理</span>
              <el-menu-item index="1-1" @click="$router.push('/supervisor/articles')">文章列表</el-menu-item>
              <el-menu-item index="1-2" @click="$router.push('/supervisor/article/add/types')">新建文章</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">站点统计</span>
              <el-menu-item index="1-3">统计数据</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">备份</span>
              <el-menu-item index="1-4" @click="staticBackup">上传资料备份</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2" @click="toggleMenu">
            <template slot="title">
              <i class="el-icon-close"></i>
              <span slot="title">隐藏/显示</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="supervisorRightWidth" >
        <router-view></router-view>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import { Menu, MenuItem, Submenu, MenuItemGroup, Row, Col, Tooltip } from 'element-ui'
  import api from '../../utils/Interface'
  export default {
    components: {
      'el-menu-item': MenuItem,
      'el-row': Row,
      'el-col': Col,
      'el-menu-item-group': MenuItemGroup,
      'el-submenu': Submenu,
      'el-menu': Menu,
      Tooltip
    },
    data () {
      return {
        isCollapse: false,
        supervisorLeftWidth: 4,
        supervisorRightWidth: 20
      }
    },
    methods: {
      toggleMenu () {
        if (this.isCollapse) {
          this.supervisorLeftWidth = 4
          this.supervisorRightWidth = 20
        } else {
          this.supervisorLeftWidth = 2
          this.supervisorRightWidth = 22
        }
        this.isCollapse = !this.isCollapse
      },
      staticBackup () {
        this.$http.post(api.supervisor.staticsBackup, {
        }).then((res) => {
          console.log("done")
          alert(res.data.info)
        })
      }
    }
  }
</script>

<style>

  .ching-supervisor-header{
    width: 100%;
    height: 3.5rem;
    background-color: #f9c6f1;
  }

  .ching-supervisor-container{
    padding:1rem;
  }

  .ching-supervisor-menu-list{
    /*max-width: 2rem;*/
  }


</style>
