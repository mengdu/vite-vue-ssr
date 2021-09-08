import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory
} from 'vue-router'

// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./pages/**/*.vue')

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
  return {
    path: (/\/(index|home)$/i.test(name)
      ? name.replace(/\/(index|home)$/i, '/')
      : name).replace(/_([a-z0-9])/gi, ':$1'),
    component: pages[path] // () => import('./pages/*.vue')
  }
})

export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
}

export async function getAsyncData (route) {
  const promises = []
  const params = {
    query: route.query,
    params: route.params,
    fullPath: route.fullPath,
    href: route.href
  }
  route.matched.forEach(e => {
    if (e.components.default.asyncData) {
      promises.push(e.components.default.asyncData.apply(null, [params]))
    }
  })

  const states = await Promise.all(promises)
  return states
}
