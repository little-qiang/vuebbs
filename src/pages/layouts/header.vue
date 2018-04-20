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
            <li>
              <router-link to="/categories/1">分享</router-link>
            </li>
            <li>
              <router-link to="/categories/2">教程</router-link>
            </li>
            <li>
              <router-link to="/categories/3">问答</router-link>
            </li>
            <li>
              <router-link to="/categories/4">公告</router-link>
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
                    <img :src="user.avatar" width="30px" height="30px" class="img-responsive img-circle">
                  </span>
                  {{user.name}}
                  <span class="caret"></span>
                </a>
                <ul role="menu" class="dropdown-menu">
                  <li>
                    <router-link :to="{ name: 'users', params: { id: user.id }}">
                      <span aria-hidden="true" class="glyphicon glyphicon-user"></span> 个人中心
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'edit', params: { id: user.id }}">
                      <span aria-hidden="true" class="glyphicon glyphicon-edit"></span>编辑资料
                    </router-link>
                  </li>
                  <li>
                    <a v-on:click="">
                      <span aria-hidden="true" class="glyphicon glyphicon-log-out"></span>
                      退出登录
                    </a>
                  </li>
                </ul>
              </li>
            </template>
            <template v-else>
              <li>
                <router-link to="signin">登录</router-link>
              </li>
              <li>
                <router-link to="signup">注册</router-link>
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
export default {
  data() {
    return {
      user: null
    }
  },
  computed: {
    isSignIn() {
      return this.user != null
    }
  },
  created() {
    let userInfo = window.localStorage.getItem('userInfo')
    if (userInfo) {
      this.user = JSON.parse(userInfo)
    } else {
      let token = window.localStorage.getItem('token')
      axios.get('/api/user', {
        headers: { 'Authorization': 'Bearer ' + token },
        params: { include: 'roles' },
      }).then((res) => {
        this.user = res.data
        window.localStorage.setItem('userInfo', JSON.stringify(res.data))
      }).catch((err) => {
        console.log(err)
      });
    }
  }
}

</script>
<style lang="scss" scoped>


</style>
