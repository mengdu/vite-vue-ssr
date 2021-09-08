import { createApp } from './main'
import { getAsyncData } from './router'

const { app, router, state } = createApp()

const ssrEl = document.getElementById('ssr-data')
const initState = JSON.parse(ssrEl ? ssrEl.innerText : '[]')

state.value = initState
app.provide('initState', state)

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  // 客户端切换路由
  router.beforeResolve((to, from, next) => {
    console.log('to', to)
    getAsyncData(to, {}).then(states => {
      state.value = states
      console.log('asyncData', states)
      next()
    }).catch(err => {
      state.value = []
      next()
    })
  })

  app.mount('#app')
})
