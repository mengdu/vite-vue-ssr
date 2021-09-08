<template>
  <div class="home">
    <ul class="topics">
      <li v-for="(item, index) in data" :key="index">
        <router-link :to="'/topics/' + item.id">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'
import http from '../utils/http'

export default {
  props: {
    data: Array
  },
  async asyncData () {
    const res = await http.get('/api/topics?tab=share')
    return {
      data: res.data.data || []
    }
  },
  setup () {
    const state = reactive({ count: 0 })
    return {
      state
    }
  }
}
</script>
