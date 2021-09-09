import { createApp } from './main'
import { getAsyncData } from './router'

const { app, router, state } = createApp()

const ssrEl = document.getElementById('ssr-data')
const initState = JSON.parse(ssrEl ? ssrEl.innerText || '{}' : '{}')

state.value = initState
app.provide('initState', state)

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  // 客户端切换路由
  router.beforeResolve((to, from, next) => {
    console.log('to', to)
    const states = to.fullPath === initState.path ? initState.states : []
    state.value = {
      path: to.fullPath,
      states: states,
      isSSR: false,
      asyncDataLoading: true
    }

    getAsyncData({ route: to }).then(states => {
      state.value = {
        path: to.fullPath,
        states,
        isSSR: false,
        asyncDataLoading: false
      }
      console.log('asyncData', states)
    }).catch(err => {
      console.error(err)
      state.value.asyncDataLoading = false
    })

    next()
  })

  app.mount('#app')
})
