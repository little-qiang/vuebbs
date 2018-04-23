<template>
  <div class="row">
    <div class="col-lg-3 col-md-3 hidden-sm hidden-xs author-info">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="text-center">
            作者：{{ topic.user.name}}
          </div>
          <hr>
          <div class="media">
            <div align="center">
              <router-link :to="{ name: 'users.show', params: {id: topic.user_id }}">
                <img :src="topic.user.avatar" width="300px" height="300px" class="thumbnail img-responsive">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 topic-content">
      <div class="panel panel-default">
        <div class="panel-body">
          <h1 class="text-center">{{ topic.title}}</h1>
          <div class="article-meta text-center">
            {{ topic.created_at }}⋅
            <span aria-hidden="true" class="glyphicon glyphicon-comment"></span> {{ topic.view_count }}
          </div>
          <div class="topic-body">
            {{ topic.body }}
          </div>
          <div class="operate">
            <hr>
            <router-link :to="{ name: 'topics.edit', params: {id: topic.id}}" role="button" class="btn btn-default btn-xs pull-left">
              <i class="glyphicon glyphicon-edit"></i>编辑
            </router-link>
            <button type="submit" class="btn btn-default btn-xs pull-left" style="margin-left: 6px;">
              <i class="glyphicon glyphicon-trash"></i>删除
            </button>
          </div>
          <div class="panel panel-default topic-reply">
            <div class="panel-body">
              <div class="reply-box">
                <form action="http://larabbs.test/replies" method="POST" accept-charset="UTF-8">
                  <input type="hidden" name="_token" value="vpT4wAUok9d304BsRT1ddQmAwLP6dWdAwuxKkhd7">
                  <input type="hidden" name="topic_id" value="75">
                  <div class="form-group">
                    <textarea rows="3" placeholder="分享你的想法" name="content" class="form-control"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary btn-sm"><i class="fa fa-share"></i>回复</button>
                </form>
              </div>
              <hr>
              <div class="reply-list">
                <div v-for="repliy in replies" class="media">
                  <div class="avatar pull-left">
                    <router-link :to="{name: 'users.show', params: {id: repliy.user_id} }">
                      <img :alt="repliy.user.name" :src="repliy.user.avatar" class="media-object img-thumbnail" style="width: 48px; height: 48px;">
                    </router-link>
                  </div>
                  <div class="infos">
                    <div class="media-heading">
                      <router-link :to="{name: 'users.show', params: {id: repliy.user_id} }" :title="repliy.user.name">
                        {{repliy.user.name}}
                      </router-link>
                      <span> • </span>
                      <span :title="repliy.updated_at" class="meta">{{ repliy.updated_at}}</span>
                      <span class="meta pull-right">
                        <button type="submit" class="btn btn-default btn-xs pull-left">
                          <i class="glyphicon glyphicon-trash"></i>
                        </button>
                      </span>
                    </div>
                    <div class="reply-content">{{repliy.content}}</div>
                  </div>
                </div>
                <hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      topic: null,
      replies: [],
      repliesPagination: null
    }
  },
  created() {
    this.getTopic()
    this.getReplies()
  },
  methods: {
    getTopic() {
      let url = '/api/topics/' + this.$route.params.id + '?include=user'
      axios.get(url).then(res => {
        this.topic = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    getReplies() {
      let url = '/api/topics/' + this.$route.params.id + '/replies?include=user'
      axios.get(url).then(res => {
        this.replies = res.data.data
        this.repliesPagination = res.data.meta.pagination
      }).catch(err => {
        console.log(err)
      })
    }
  }
}

</script>
