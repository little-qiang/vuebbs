import Vue from 'vue'
import Vuex from 'vuex'

import $http from '../plugins/http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    token: '',
    userInfo: null,
  },
  getters: {
    isSignIn: state => state.userInfo != null
  },
  mutations: {
    setCategoies(state, categories) {
      state.categories = categories
    },
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
    getCategories({ commit, state }) {
      $http.get('/api/categories').then(res => {
        window.localStorage.setItem('categories', JSON.stringify(res.data))
        commit('setCategoies', res.data)
      })
    },
    signIn({ commit, state }, params) {
      $http.post('/api/authorizations', params).then(res => {
        commit('signIn', res.access_token)
        commit('setUserInfo', res.user_info)
        window.localStorage.setItem('token', res.access_token)
        window.localStorage.setItem('userInfo', JSON.stringify(res.user_info))
      }).catch((err) => {
        if (err.errors) {
          let errors = err.errors
          let msg = Object.keys(errors).reduce((carry, k) => {
            return carry + `${k}: ${errors[k].reduce((c, i) => c + i)}\n`
          }, '')
          alert(msg)
        } else {
          alert(err.message)
        }
      })
    },
    signOut({ commit, state }) {
      commit('signOut')
    }
  }
})
