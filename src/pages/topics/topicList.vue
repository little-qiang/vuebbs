<template>
  <div class="col-lg-9 col-md-9 topic-list">
    <div v-show="categoryInfo" role="alert" class="alert alert-info">
      {{ categoryInfo }}
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <ul class="nav nav-pills">
          <li :class="{active: params.order == 'default'}">
            <a v-on:click="params.order = 'default'">最后回复</a>
          </li>
          <li :class="{active: params.order == 'recent'}">
            <a v-on:click="params.order = 'recent'">最新发布</a>
          </li>
        </ul>
      </div>
      <div class="panel-body">
        <ul class="media-list">
          <template v-for="topic in topics">
            <li class="media">
              <div class="media-left">
                <router-link :to="{ name: 'users.show', params: { id: topic.user_id } }">
                  <img :src="topic.user.avatar" :title="topic.user.name" class="media-object img-thumbnail" style="width: 52px; height: 52px;">
                </router-link>
              </div>
              <div class="media-body">
                <div class="media-heading">
                  <router-link :to="{name: 'topics.show', params: {id: topic.id}}" :title="topic.title">
                    {{topic.title}}
                  </router-link>
                  <router-link :to="{name: 'topics.show', params: {id: topic.id}}" class="pull-right">
                    <span class="badge">{{topic.view_count}}</span>
                  </router-link>
                  </a>
                </div>
                <div class="media-body meta">
                  <router-link :to="{name: 'categories.index', params: {catId: topic.category_id}}" :title="topic.category.name">
                    <span aria-hidden="true" class="glyphicon glyphicon-folder-open"></span> {{topic.category.name}}
                  </router-link>
                  <span> • </span>
                  <router-link :to="{ name: 'users.show', params: { id: topic.user_id } }" :title="topic.user.name">
                    <span aria-hidden="true" class="glyphicon glyphicon-user"></span> {{topic.user.name}}
                  </router-link>
                  <span> • </span>
                  <span aria-hidden="true" class="glyphicon glyphicon-time"></span>
                  <span title="最后活跃于" class="timeago">{{topic.user.last_actived_at}}</span>
                </div>
              </div>
            </li>
            <hr>
          </template>
        </ul>
        <pagination :pagination="pagination" v-on:changePage="changePage"></pagination>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import pagination from '../layouts/pagination'

export default {
  name: 'topicList',
  data() {
    return {
      topics: [],
      pagination: [],
      params: {
        category_id: 0,
        page: 1,
        order: 'default',
        include: 'user,category'
      }
    }
  },
  components: {
    pagination
  },
  computed: {
    catId: function(){
      return this.$route.params.catId ? this.$route.params.catId : 0
    },
    categoryInfo: function() {
      return this.catId && this.topics.length ? this.topics[0].category.description : ''
    }
  },
  watch: {
    catId: function(val, oldVal) {
      this.params = {
        category_id: val,
        page: 1,
        order: 'default',
        include: 'user,category'
      }
    },
    params: {
      handler(val, oldVal) {
        this.getTopics()
      },
      deep: true
    }
  },
  created() {
    this.getTopics()
  },
  methods: {
    getTopics() {
      let url = '/api/topics'
      axios.get(url, { params: this.params }).then(res => {
        this.topics = res.data.data
        this.pagination = res.data.meta.pagination
        this.curPage = res.data.meta.pagination.current_page
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
