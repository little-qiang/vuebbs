<template>
  <div class="row">
    <topic-list></topic-list>
    <div class="col-lg-3 col-md-3 sidebar">
      <div class="panel panel-default">
        <div class="panel-body">
          <router-link :to="{name: 'topics.create'}" aria-label="Left Align" class="btn btn-success btn-block">
            <span aria-hidden="true" class="glyphicon glyphicon-pencil"></span> 新建帖子
          </router-link>
        </div>
      </div>
      <active-users></active-users>
      <links></links>
    </div>
  </div>
</template>
<script>
import topicList from './topicList'
import activeUsers from './activeUsers'
import links from './links'

export default {
  name: 'Topics',
  components: {
    topicList,
    activeUsers,
    links
  }
}

</script>
