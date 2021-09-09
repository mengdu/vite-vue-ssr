<template>
  <div class="container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'PageAbout',
  async setup() {
    onMounted(() => {
      console.log('onMounted')
    })
  
    return {
      msg: 'About'
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
