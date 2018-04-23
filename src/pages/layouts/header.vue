<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" data-toggle="collapse" data-target="#app-navbar-collapse" class="navbar-toggle collapsed">
          <span class="sr-only">Toggle Navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">LaraBBS</router-link>
      </div>
      <div id="app-navbar-collapse" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/topics">话题</router-link>
            </li>
            <li v-for="category in categories">
              <router-link :to="{ name: 'categories.index', params: { catId: category.id} }">
                {{category.name}}
              </router-link>
            </li>
          </ul>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <ul class="nav navbar-nav navbar-right">
            <template v-if="isSignIn">
              <li>
                <a href="http://larabbs.test/topics/create">
                  <span aria-hidden="true" class="glyphicon glyphicon-plus"></span>
                </a>
              </li>
              <li>
                <a href="http://larabbs.test/notifications" class="notifications-badge" style="margin-top: -2px;">
                <span title="消息提醒" class="badge badge-fade ">0</span>
              </a>
              </li>
              <li class="dropdown">
                <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="dropdown-toggle">
                  <span class="user-avatar pull-left" style="margin-right: 8px; margin-top: -5px;">
                    <img :src="userInfo.avatar" width="30px" height="30px" class="img-responsive img-circle">
                  </span>
                  {{userInfo.name}}
                  <span class="caret"></span>
                </a>
                <ul role="menu" class="dropdown-menu">
                  <li>
                    <router-link :to="{ name: 'users.show', params: { id: userInfo.id }}">
                      <span aria-hidden="true" class="glyphicon glyphicon-user"></span> 个人中心
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'users.edit', params: { id: userInfo.id }}">
                      <span aria-hidden="true" class="glyphicon glyphicon-edit"></span>编辑资料
                    </router-link>
                  </li>
                  <li>
                    <a v-on:click="signOut">
                      <span aria-hidden="true" class="glyphicon glyphicon-log-out"></span>
                      退出登录
                    </a>
                  </li>
                </ul>
              </li>
            </template>
            <template v-else>
              <li>
                <router-link to="/signin">登录</router-link>
              </li>
              <li>
                <router-link to="/signup">注册</router-link>
              </li>
            </template>
          </ul>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['categories', 'userInfo']),
    ...mapGetters(['isSignIn']),
  },
  created() {
    if (!window.localStorage.getItem('categories')) {
      this.$store.dispatch('getCategories')
    }
  },
  methods: {
    signOut() {
      axios.delete('/api/authorizations/current', {
        headers: { 'Authorization': 'Bearer ' + this.$store.state.token },
      }).then((res) => {
        this.$router.push('/')
      }).catch((err) => {
        this.$router.push('/')
      });
      this.$store.dispatch('signOut')
    }
  }
}

</script>
