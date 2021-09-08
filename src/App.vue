<template>
  <header class="nav-header">
    <router-link to="/">Home</router-link>|
    <router-link to="/hello?a=123">Hello</router-link>|
    <router-link to="/sub">Sub</router-link>|
    <router-link to="/about">About</router-link>
  </header>
  <router-view v-slot="{ Component }">
    <Suspense>
      <component :is="Component" v-bind="initState[0]"/>
    </Suspense>
  </router-view>
</template>
<script>
import { inject } from 'vue'
export default {
  setup () {
    const initState = inject('initState')

    return {
      initState
    }
  }
}
</script>
<style>
body {
  margin: 0;
  font-size: 14px;
}

.nav-header {
  background: #ff9800;
  padding: 10px;
}

.nav-header a {
  color: #fff;
  margin: 0 5px;
}
.nav-header a.router-link-exact-active {
  color: #71544b;
  text-decoration: none;
}
</style>
