import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        layout:'main'
      }
    },
    {
      path: '/help',
      name: 'Help',
      component: () => import('../views/Help.vue'),
      meta:{
        layout:'main'
      }
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('../views/Auth.vue'),
      meta:{
        layout:'auth'
      }
    }
  ]
})

export default router
