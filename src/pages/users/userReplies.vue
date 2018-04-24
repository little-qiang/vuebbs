<template>
  <div>
    <ul class="list-group">
      <li v-for="repliy in replies" class="list-group-item">
        <router-link :to="{ name: 'topics.index', params: { id: repliy.topic.id } }">
          {{ repliy.topic.title }}
        </router-link>
        <div class="reply-content" style="margin: 6px 0px;">
          {{ repliy.content }}
        </div>
        <div class="meta">
          <span aria-hidden="true" class="glyphicon glyphicon-time"></span> 回复于 2周前
        </div>
      </li>
    </ul>
    <pagination :pagination="pagination" v-on:changePage="changePage"></pagination>
  </div>
</template>
<script>
import pagination from '../layouts/pagination'

export default {
  name: 'userReplies',
  data() {
    return {
      replies: [],
      pagination: [],
      params: {
        page: 1,
        include: 'topic.user,topic.category'
      }
    }
  },
  created() {
    this.getReplies()
  },
  components: {
    pagination
  },
  watch: {
    params: {
      handler(val, oldVal) {
        this.getReplies()
      },
      deep: true
    }
  },
  methods: {
    getReplies() {
      let url = '/api/users/' + this.$route.params.id + '/replies'
      this.$http.get(url, this.params).then(res => {
        this.replies = res.data
        this.pagination = res.meta.pagination
        this.curPage = res.meta.pagination.current_page
      }).catch((err) => {
        console.log(err)
      })
    },
    changePage(payload) {
      this.params.page = payload.page
    }
  }
}

</script>
