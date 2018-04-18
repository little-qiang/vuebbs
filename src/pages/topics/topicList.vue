<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <ul class="nav nav-pills">
        <li class="active"><a href="http://larabbs.test?order=default">最后回复</a></li>
        <li><a href="http://larabbs.test?order=recent">最新发布</a></li>
      </ul>
    </div>
    <div class="panel-body">
      <ul class="media-list">
        <template v-for="topic in topics">
          <li class="media">
            <div class="media-left">
              <a href="http://larabbs.test/users/1">
                    <img :src="topic.user.avatar" :title="topic.user.name" class="media-object img-thumbnail" style="width: 52px; height: 52px;">
                  </a>
            </div>
            <div class="media-body">
              <div class="media-heading">
                <a href="http://larabbs.test/topics/105/ce-shi-title" :title="topic.title">
                        {{topic.title}}
                    </a>
                <a href="http://larabbs.test/topics/105/ce-shi-title" class="pull-right">
                      <span class="badge">{{topic.view_count}}</span>
                    </a>
              </div>
              <div class="media-body meta">
                <a href="http://larabbs.test/categories/1" :title="topic.category.name">
                      <span aria-hidden="true" class="glyphicon glyphicon-folder-open"></span>
                      {{topic.category.name}}
                    </a>
                <span> • </span>
                <a href="http://larabbs.test/users/1" :title="topic.title">
                      <span aria-hidden="true" class="glyphicon glyphicon-user"></span>
                      {{topic.title}}
                    </a>
                <span> • </span>
                <span aria-hidden="true" class="glyphicon glyphicon-time"></span>
                <span title="最后活跃于" class="timeago">{{topic.user.last_actived_at}}</span>
              </div>
            </div>
          </li>
          <hr>
        </template>
      </ul>
      <ul class="pagination">
        <template v-if="pagination.current_page == 1">
          <li class="disabled">
            <span>«</span>
          </li>
        </template>
        <template v-else>
          <li>
            <a href="pagination.links.previous" rel="prev">«</a>
          </li>
        </template>
        <li v-for="n in pagination.total_pages" :class="{active: n == pagination.current_page}">
          <a href="">
            {{n}}
          </a>
        </li>
        <template v-if="pagination.current_page == pagination.total_pages">
          <li class="disabled">
            <span>«</span>
          </li>
        </template>
        <template v-else>
          <li>
            <a :href="pagination.links.next" rel="next">»</a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['topics', 'pagination']
}
</script>
