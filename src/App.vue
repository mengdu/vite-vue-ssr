<template>
  <header class="nav-header">
    <div class="container">
      <router-link to="/">Home</router-link>|
      <router-link to="/hello?a=123">Hello</router-link>|
      <router-link to="/sub">Sub</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </header>
  <router-view v-slot="{ Component }">
    <!-- 缓存暂时有问题 -->
    <!-- <keep-alive :max="5">
      <Suspense>
        <component :is="Component" v-bind="initState.states[0] || {}" :asyncDataLoading="initState.asyncDataLoading"/>
      </Suspense>
    </keep-alive> -->
    <Suspense>
      <component :is="Component" v-bind="initState.states[0] || {}" :asyncDataLoading="initState.asyncDataLoading"/>
    </Suspense>
  </router-view>
</template>
<script>
import { inject } from 'vue'
export default {
  setup () {
    const initState = inject('initState')
    return {
      initState,
      isClient: !import.meta.env.SSR
    }
  }
}
</script>
<style>
body {
  margin: 0;
  font-size: 14px;
}

.container {
  width: 800px;
  margin: 0 auto;
  padding: 0 15px;
}

.nav-header {
  background: #ff9800;
  padding: 10px;
  color: #d88100;
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
