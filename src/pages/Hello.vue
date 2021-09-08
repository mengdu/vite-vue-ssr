<template>
  <div>
    <h1>Hello</h1>
    <p>msg: {{ msg }}</p>
    <p>arr: {{ arr }}</p>
  </div>
</template>
<script>
import { sleep } from '../utils'

export default {
  props: {
    msg: String,
    arr: Array
  },
  async asyncData () {
    console.log('arguments', arguments)
    await sleep(500)

    return {
      msg: 'Hello',
      arr: [5,4,3,2,1]
    }
  },
  setup () {
    return {}
  }
}
</script>

