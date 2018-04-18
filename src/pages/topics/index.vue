<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-9 col-md-9 topic-list">
        <topic-list></topic-list>
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
import topicList from './topicList'
import activeUsers from './activeUsers'
import links from './links'

export default {
  name: 'topics',
  components: {
    topicList,
    activeUsers,
    links
  }
}

</script>
