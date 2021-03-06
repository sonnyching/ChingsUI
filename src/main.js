// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './utils/httputil'
import Vuex from 'vuex'
import store from './vuex/index'
import VueRouter from 'vue-router'
import 'jquery'
import '../statics/common/common.css'
import URL from '../src/utils/Interface'
import HTTP from '../src/utils/httputil'
import 'element-ui/lib/theme-default/index.css'
// import '../statics/js/baidu_statics'
// import { Button, Select, Row, Col, Input, Menu,
//   Submenu, MenuItem, MenuItemGroup, Option,
//   TableColumn, Table, Tooltip, Pagination, Loading, Dialog} from 'element-ui'
import 'normalize.css'
import {Table, TableColumn, Tooltip, MessageBox, Message} from 'element-ui'

// Vue.use(MuseUI)
Vue.use(Vuex)

// Vue.use(Pagination)
//
// Vue.use(Button)
// Vue.use(Select)
// Vue.use(Option)
//
// Vue.use(Loading)
//
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(Input)
//
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(MenuItemGroup)
//
Vue.use(TableColumn)
Vue.use(Table)
//
// Vue.use(Dialog)
//
Vue.use(Tooltip)

Vue.use(VueRouter)

Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
Vue.prototype.$http = axios
Vue.config.productionTip = false

const routers = new VueRouter({
  routes: router,
  mode: 'history'
})

//  导航钩子，用作登陆校验
routers.beforeEach((to, from, next) => {
  // console.log(to.path)
  // console.log(to.path.indexOf('supervisor'))
  // console.log(sessionStorage.getItem('ChingsToken'))
  // console.log(sessionStorage.getItem('ChingsToken') !== null)

  //  百度统计
  if (from.name) {
    // console.log('111-' + to.fullPath)
    /* eslint-disable */
    _hmt.push(['_trackPageview', '/#' + to.fullPath, window.location.origin])
  } else {
    // console.log('2-' + to.fullPath)
    /* eslint-disable */
    _hmt.push(['_trackPageview', '/#' + to.fullPath])
  }

  // 后台权限拦截
  if (to.path.indexOf('supervisor') >= 0) {
    var token = sessionStorage.getItem('ChingsToken')
    console.log(token)
    HTTP.post(URL.isLogin, {
      token: token
    }).then((res) => {
      if (res.data.code !== 0) {
        next({
          path: '/user/login'
        })
      } else {
        next()
      }
    })
  } else {
    //  无需登陆
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: routers,
  template: '<App/>',
  store: store,
  components: { App }
})
