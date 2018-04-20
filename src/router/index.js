import Vue from 'vue'
import Router from 'vue-router'
import Topics from '@/pages/topics/index'
import Signin from '@/pages/auth/signin'
import Signup from '@/pages/auth/signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Topics
    },
    {
      path: '/topics',
      name: 'topics',
      component: Topics
    },
    {
      path: '/categories/:catId',
      name: 'categories',
      component: Topics
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/users/:id',
      name: 'users',
      component: Topics
    }
  ]
})
