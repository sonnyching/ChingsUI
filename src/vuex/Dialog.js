import * as types from './types'

const state = {
  open: false,
  msg: '',
  title: ''
}

const mutations = {
  [types.DIALOG_OPEN] (state, {title, msg}) {
    state.open = true
    state.msg = msg
    state.title = title
  },
  [types.DIALOG_CLOSE] (state) {
    state.open = false
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions
}
