// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './utils/httputil'
import MuseUI from 'muse-ui'
import Vuex from 'vuex'
import store from './vuex/index'
import VueRouter from 'vue-router'
import 'jquery'
import 'muse-ui/dist/muse-ui.css'
import '../static/common/common.css'

Vue.use(MuseUI)
Vue.use(Vuex)

Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.prototype.$http = axios

const routers = new VueRouter({
  routes: router
})

//  导航钩子，用作登陆校验
routers.beforeEach((to, from, next) => {
  // console.log(to.path)
  // console.log(to.path.indexOf('supervisor'))
  // console.log(sessionStorage.getItem('ChingsToken'))
  // console.log(sessionStorage.getItem('ChingsToken') !== null)

  if (to.path.indexOf('supervisor') >= 0) {
    var token = sessionStorage.getItem('ChingsToken')
    if (token !== null) {
      next()
    } else {
      next({
        path: '/user/login'
      })
    }
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
