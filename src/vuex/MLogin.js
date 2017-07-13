import * as types from './types'

const state = {
  token:''
};

const mutations = {
  [types.MUTATION_UPDATE_TOKEN](state, token) {
    state.token = token
  }
}

const actions = {
  [types.ACTION_UPDATE_TOKEN]({commit}, token) {
    commit(types.MUTATION_UPDATE_TOKEN,token);
  }
}

export default {
  state,
  mutations,
  actions
}
