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
            <li><router-link to="/topics">话题</router-link></li>
            <li><router-link to="/categories/1">分享</router-link></li>
            <li><router-link to="/categories/2">教程</router-link></li>
            <li><router-link to="/categories/3">问答</router-link></li>
            <li><router-link to="/categories/4">公告</router-link></li>
          </ul>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="signin">登录</router-link></li>
          <li><router-link to="signup">注册</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {}

</script>
<style lang="scss" scoped>


</style>
