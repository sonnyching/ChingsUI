import Vue from 'vue'
import Vuex from 'vuex'
import MLogin from './MLogin'
import Dialog from './Dialog'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    MLogin,
    Dialog
  }
})
