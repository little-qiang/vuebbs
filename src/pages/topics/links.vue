<template>
  <div class="panel panel-default">
    <div class="panel-body active-users">
      <div class="text-center">资源推荐</div>
      <hr>
      <a v-for="link in links" :href="link.link" class="media">
        <div class="media-body">
          <span class="media-heading">{{link.title}}</span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: []
    }
  },
  created() {
    this.renderLinks()
  },
  methods: {
    renderLinks() {
      this.$http.get('/api/links').then((res) => {
          this.links = res.data
      })
    }
  }
}

</script>
