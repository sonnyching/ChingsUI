// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './utils/httputil'
import MuseUI from 'muse-ui'
import 'jquery'
import 'muse-ui/dist/muse-ui.css'
import '../static/common/common.css'
Vue.use(MuseUI)

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
