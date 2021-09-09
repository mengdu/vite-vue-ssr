<template>
  <div class="home container">
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
  keepAlive: true,
  async asyncData () {
    const res = await http.get('/api/topics?tab=share')
    return {
      data: res.data.data || []
    }
  },
  setup (props) {
    const state = reactive({ count: 0 })
    return {
      state
    }
  }
}
</script>
<style>
.topics {
  margin: 0;
  padding: 15px 0;
  counter-reset: item;
  list-style-type: decimal;
  list-style-position: inside;
}

.topics li {
  display: block;
  line-height: 24px;
}

.topics li::before {
  font-feature-settings: "kern" 1,"tnum" 1;
  content: counters(item, ".") "";
  counter-increment: item;
  width: 30px;
  display: inline-block;
  text-align: center;
  color: #38393c;
}
</style>
