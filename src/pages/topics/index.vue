<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-9 col-md-9 topic-list">
        <topic-list v-bind="{topics, pagination}"></topic-list>
      </div>
      <div class="col-lg-3 col-md-3 sidebar">
        <div class="panel panel-default">
          <div class="panel-body">
            <a href="http://larabbs.test/topics/create" aria-label="Left Align" class="btn btn-success btn-block">
              <span aria-hidden="true" class="glyphicon glyphicon-pencil"></span>
              新建帖子
            </a>
          </div>
        </div>
        <active-users></active-users>
        <links></links>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import topicList from './topicList'
import activeUsers from './activeUsers'
import links from './links'

export default {
  name: 'topics',
  components: {
    topicList,
    activeUsers,
    links
  },
  data() {
    return {
      topics: [],
      pagination: [],
    }
  },
  created: function() {
    this.renderTopics()
  },
  methods: {
    renderTopics: function() {
      axios.get('/api/topics?include=user,category').then((res) => {
        if (res.status == 200) {
          this.topics = res.data.data
          this.pagination = res.data.meta.pagination
        }
      })
    }
  }
}

</script>
