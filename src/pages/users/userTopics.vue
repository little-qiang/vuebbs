<template>
  <div>
    <ul class="list-group">
      <li v-for="topic in topics" class="list-group-item">
        <router-link :to="{ name: 'topics.show', params: { id: topic.id } }" :title="topic.title">
          {{ topic.title}}
        </router-link>
        <span class="meta pull-right">0恢复</span>
        <span> ⋅ </span> 3周前
      </li>
    </ul>
    <pagination :pagination="pagination" v-on:changePage="changePage"></pagination>
  </div>
</template>
<script>
import pagination from '../layouts/pagination'

export default {
  name: 'userTopics',
  data() {
    return {
      topics: [],
      pagination: [],
      params: {
        page: 1,
      }
    }
  },
  created() {
    this.getTopics()
  },
  components: {
    pagination
  },
  watch: {
    params: {
      handler(val, oldVal) {
        this.getTopics()
      },
      deep: true
    }
  },
  methods: {
    getTopics() {
      let url = '/api/users/' + this.$route.params.id + '/topics'
      this.$http.get(url, this.params).then(res => {
        this.topics = res.data
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
