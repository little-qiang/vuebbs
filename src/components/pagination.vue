<template>
  <ul class="pagination">
    <template v-if="isFirst">
      <li class="disabled"><span>{{prev}}</span></li>
    </template>
    <template v-else>
      <li><a v-on:click="changePage(pagination.current_page - 1)">{{prev}}</a></li>
    </template>

    <li v-for="n in items" :class="{disabled: n == spe, active: n == pagination.current_page}">
      <a v-on:click="changePage(n)">
        {{n}}
      </a>
    </li>

    <template v-if="isLast">
      <li class="disabled"><span>{{next}}</span></li>
    </template>
    <template v-else>
      <li><a v-on:click="changePage(pagination.current_page + 1)">{{next}}</a></li>
    </template>
  </ul>
</template>
<script>

export default {
  props: {
    pagination: { required: true },
    prev: { default: '«'},
    next: { default: '»'},
    page: { default: 1 },
    side: { default: 3 },
    spe: { default: '...' },
  },
  computed: {
    isFirst() {
      return this.pagination.current_page == 1
    },
    items() {
      let range = (s, e) => new Array(e - s + 1).fill(0).map((v, k) => k + s)
      let { spe, side } = this
      let { current_page: cur = 0, total_pages: max = 0, } = this.pagination
      if (max < side * 4) {
        return range(1, max)
      } else if (cur > max - side * 2) {
        return [1, 2, spe, ...range(max - side * 3 + 2, max)]
      } else if (cur <= side * 2) {
        return [...range(1, side * 3 - 1), spe, max - 1, max]
      } else {
        return [1, 2, spe, ...range(cur - side, cur + side), spe, max - 1, max]
      }
    },
    isLast() {
      return this.pagination.current_page == this.pagination.total_pages
    },
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', { page })
    },
  }
}

</script>
