import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'About',
      component: HomeView
    },
    {
      path: '/front',
      name: 'Front-end skills',
      component: () => import('../views/FrontView.vue')
    },
    {
      path: '/back',
      name: 'Back-end skills',
      component: () => import('../views/BackView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/debug',
      name: 'Debug',
      component: () => import('../views/DebugView.vue')
    }
  ]
})

export default router
