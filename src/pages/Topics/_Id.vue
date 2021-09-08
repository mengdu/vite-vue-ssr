<template>
  <div class="detail">
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
  async asyncData (ctx) {
    const res = await http.get('/api/topics/' + ctx.params.id)

    return {
      id: ctx.params.id,
      data: res.data.data || null
    }
  }
}
</script>
