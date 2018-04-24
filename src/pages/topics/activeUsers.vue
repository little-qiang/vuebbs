<template>
  <div class="panel panel-default">
    <div class="panel-body active-users">
      <div class="text-center">活跃用户</div>
      <hr>
      <a v-for="user in users" :href="user.last_actived_at" class="media">
        <div class="media-left media-middle">
          <img :src="user.avatar" width="24px" height="24px" class="img-circle media-object">
        </div>
        <div class="media-body">
          <span class="media-heading">{{user.name}}</span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    this.renderUsers()
  },
  methods: {
    renderUsers() {
      this.$http.get('/api/actived/users').then((res) => {
        if (res.status == 200) {
          this.users = res.data;
        }
      })
    }
  }
}

</script>
