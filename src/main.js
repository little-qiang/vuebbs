// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import http from './util/http'

import './assets/js/bootstrap.min'

Vue.prototype.$http = http
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let categories = window.localStorage.getItem('categories')
  if (categories && store.state.categories.length == 0) {
    store.commit('setCategoies', JSON.parse(categories))
  }

  let token = window.localStorage.getItem('token')
  if (token) {
    store.commit('signIn', token)
  }

  let userInfo = window.localStorage.getItem('userInfo')
  if (userInfo) {
    store.commit('setUserInfo', JSON.parse(userInfo))
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
