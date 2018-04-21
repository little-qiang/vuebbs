// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'

import './assets/js/bootstrap.min'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('token')
  let userInfo = window.localStorage.getItem('userInfo')
  if(token){
    store.commit('signIn', token)
  }
  if(userInfo){
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

