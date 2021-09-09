# vite-vue-ssr

Server side render base on vue 3.0 + vite.

```
npm run dev
```

**asyncData**

```html
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
import http from '../utils/http'

export default {
  props: {
    data: Array
  },
  // loadData
  async asyncData ({ route }) {
    const res = await http.get('/api/topics?tab=share')
    return {
      // will set current page `props.data`
      data: res.data.data || []
    }
  }
}
</script>
```
