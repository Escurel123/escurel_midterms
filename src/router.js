import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'

const NAV_OFFSET = 80

// Single-page route; every nav item is a hash anchor to a section on this page.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', name: 'home', component: Home }],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: NAV_OFFSET, behavior: 'smooth' }
    }
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
