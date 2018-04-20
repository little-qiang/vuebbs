import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: {}
  },
  mutations: {
    setToken(state, token){
      state.token = token
    }
  },
  actions: {
    setToken(context, token){
      context.commit('setToken', token)
    }
  }
})
