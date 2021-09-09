<template>
  <div class="detail container">
    <div v-if="!data">Not Found</div>
    <div v-else>
      <h1>{{data.title}}</h1>
      <div v-html="data.content"></div>
    </div>
  </div>
</template>
<script>
import http from '../../utils/http'

export default {
  props: {
    id: String,
    data: Object
  },
  async asyncData ({ route }) {
    const res = await http.get('/api/topics/' + route.params.id)

    return {
      id: route.params.id,
      data: res.data.data || null
    }
  }
}
</script>
