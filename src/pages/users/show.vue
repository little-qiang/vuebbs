<template>
  <div class="row users-show-page">
    <div class="col-lg-3 col-md-3 hidden-sm hidden-xs user-info">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="media">
            <div align="center">
              <img :src="user.avatar" width="300px" height="300px" class="thumbnail img-responsive">
            </div>
            <div class="media-body">
              <hr>
              <h4><strong>个人简介</strong></h4>
              <p>{{ user.introduction}}</p>
              <hr>
              <h4><strong>注册于</strong></h4>
              <p>{{user.created_at}}</p>
              <hr>
              <h4><strong>最后活跃</strong></h4>
              <p :title="user.last_actived_at">{{user.last_actived_at}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
      <div class="panel panel-default">
        <div class="panel-body">
          <span>
            <h1 class="panel-title pull-left" style="font-size: 30px;">
              {{user.name}}
              <small>{{ user.email }}</small>
            </h1>
          </span>
        </div>
      </div>
      <hr>
      <div class="panel panel-default">
        <div class="panel-body">
          <ul class="nav nav-tabs">
            <li :class="{active: isShowTopic}" v-on:click="switchShow('topics')">
              <a>Ta 的话题</a>
            </li>
            <li :class="{active: !isShowTopic}" v-on:click="switchShow('replies')">
              <a>Ta 的回复</a>
            </li>
          </ul>
          <user-topics v-show="isShowTopic"></user-topics>
          <user-replies v-show="!isShowTopic"></user-replies>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import userTopics from './userTopics'
import userReplies from './userReplies'

export default {
  name: 'usersShow',
  data() {
    return {
      user: {},
      showDefault: 'topics'
    }
  },
  computed: {
    isShowTopic() {
      return this.showDefault == 'topics'
    },
  },
  created() {
    this.getUser()
  },
  components: {
    userTopics,
    userReplies
  },
  methods: {
    getUser() {
      let url = '/api/users/' + this.$route.params.id
      axios.get(url).then(res => {
        this.user = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    switchShow(show) {
      this.showDefault = show
    }
  }
}

</script>
