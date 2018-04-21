import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: null
  },
  getters: {
    isSignIn: state => state.userInfo != null
  },
  mutations: {
    signIn(state, token) {
      state.token = token
    },
    signOut(state) {
      state.token = ''
      state.userInfo = null
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('userInfo')
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
  },
  actions: {
    signIn({ commit, state }, params) {
      axios.post('/api/authorizations', params).then((res) => {
        commit('signIn', res.data.access_token)
        commit('setUserInfo', res.data.user_info)
        window.localStorage.setItem('token', res.data.access_token)
        window.localStorage.setItem('userInfo', JSON.stringify(res.data.user_info))
      }).catch((error) => {
        console.log(error)
      })
    },
    signOut({ commit, state }) {
      commit('signOut')
    }
  }
})
