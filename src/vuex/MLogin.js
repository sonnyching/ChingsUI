import * as types from './types'

const state = {
  token: '' //  登录登录凭证
}

const mutations = {
  [types.MUTATION_UPDATE_TOKEN] (state, token) {
    state.token = token
  }
}

const actions = {
  [types.ACTION_UPDATE_TOKEN] ({commit}, token) {
    localStorage.setItem('ChingsToken', token)
    commit(types.MUTATION_UPDATE_TOKEN, token)
  }
}

export default {
  state,
  mutations,
  actions
}
