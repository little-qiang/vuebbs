import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

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
      axios.get('/api/categories').then(res => {
        window.localStorage.setItem('categories', JSON.stringify(res.data.data))
        commit('setCategoies', res.data.data)
      })
    },
    signIn({ commit, state }, params) {
      axios.post('/api/authorizations', params).then(res => {
        commit('signIn', res.data.access_token)
        commit('setUserInfo', res.data.user_info)
        window.localStorage.setItem('token', res.data.access_token)
        window.localStorage.setItem('userInfo', JSON.stringify(res.data.user_info))
      }).catch((err) => {
        if (err.response) {
          let errors = err.response.data.errors
          console.log(errors)
          let msg = Object.keys(errors).reduce((carry, k) => {
            return carry + `${k}: ${errors[k].reduce((c, i) => c + i)}\n`
          }, '')
          alert(msg)
        }
      })
    },
    signOut({ commit, state }) {
      commit('signOut')
    }
  }
})
