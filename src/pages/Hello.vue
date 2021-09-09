<template>
  <div class="container">
    <h1>Hello</h1>
    <p>{{asyncDataLoading ? 'loading...' : 'done'}}</p>
    <p>msg: {{ msg }}</p>
    <p>arr: {{ arr }}</p>
  </div>
</template>
<script>
import { watchEffect } from 'vue'
import { sleep } from '../utils'

export default {
  name: 'PageHello',
  props: {
    msg: String,
    arr: Array,
    asyncDataLoading: Boolean
  },
  async asyncData () {
    console.log('arguments', arguments)
    await sleep(500)

    return {
      msg: 'Hello',
      arr: [5,4,3,2,1]
    }
  },
  setup (props) {
    watchEffect(() => {
      console.log('asyncDataLoading change', props.asyncDataLoading)
    })
    return {}
  }
}
</script>

