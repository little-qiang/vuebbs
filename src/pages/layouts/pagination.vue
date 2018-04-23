<template>
  <ul class="pagination">
    <template v-if="pagination.current_page == 1">
      <li class="disabled">
        <span>«</span>
      </li>
    </template>
    <template v-else>
      <li>
        <a v-on:click="changePage(pagination.current_page - 1)">«</a>
      </li>
    </template>
    <li v-for="n in pagination.total_pages" :class="{active: n == pagination.current_page}">
      <a v-on:click="changePage(n)">
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
        <a v-on:click="changePage(pagination.current_page + 1)">»</a>
      </li>
    </template>
  </ul>
</template>
<script>
export default {
  props: {
    pagination: { required: true},
    page: { default: 1},
    eachSide: { default: 3},
  },
  created(){
    console.log(this.eachSide)
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', { page })
    },
    //分页相关方法
  }
}

</script>
