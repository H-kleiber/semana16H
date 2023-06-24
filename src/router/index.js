import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('../views/Location.vue')
    },
    {
      path: '/episode',
      name: 'episode',
      component: () => import('../views/Episode.vue')
    }
  ]
})

export default router
