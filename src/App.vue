<template>
  <div id="app" class="root-page">
    <common-header></common-header>
    <div class="container">
      <router-view/>
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
import commonHeader from './layouts/header'
import commonFooter from './layouts/footer'

export default {
  name: 'App',
  components: {
    commonHeader,
    commonFooter,
  }
}
</script>
<style lang="scss">
@import "./assets/sass/app";
</style>
