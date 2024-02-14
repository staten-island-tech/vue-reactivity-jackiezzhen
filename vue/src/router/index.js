import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/wish',
      name: 'wish',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/wishView.vue')
    },
    {
      path: '/character',
      name: 'character',
      component: () => import('../views/characterView.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/infoView.vue')
    },
  ]
})

export default router
