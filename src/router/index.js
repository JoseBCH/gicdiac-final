import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/DS-articles',
      name: 'DS-articles',
      component: () => import('../views/ArticlesView.vue'),
      meta: { title: 'DS' }
    },
    {
      path: '/IA-articles',
      name: 'IA-articles',
      component: () => import('../views/ArticlesView.vue'),
      meta: { title: 'IA' }
    },
    {
      path: '/CS-articles',
      name: 'CS-articles',
      component: () => import('../views/ArticlesView.vue'),
      meta: { title: 'CS' }
    }
  ]
})

export default router
