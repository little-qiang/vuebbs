import Vue from 'vue'
import Router from 'vue-router'
import Topics from '@/pages/topics'
import TopicShow from '@/pages/topics/show'
import UserShow from '@/pages/users/show'
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
      name: 'topics.index',
      component: Topics
    },
    {
      path: '/topics/:id',
      name: 'topics.show',
      component: TopicShow,
    },
    {
      path: '/topics/create',
      name: 'topics.create',
      component: TopicShow
    },
    {
      path: '/topics/:id/edit',
      name: 'topics.edit',
      component: TopicShow
    },
    {
      path: '/categories/:catId',
      name: 'categories.index',
      component: Topics,
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
      name: 'users.show',
      component: UserShow
    },
    {
      path: '/users/:id/edit',
      name: 'users.edit',
      component: UserShow
    }
  ]
})
