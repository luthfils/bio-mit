import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: () => import('../pages/Speaker.vue')
    },
    {
      path: '/judges',
      name: 'judges',
      component: () => import('../pages/Judges.vue')
    },
    {
      path: '/mentors',
      name: 'mentors',
      component: () => import('../pages/Mentors.vue')
    },
    {
      path: '/sponsorship',
      name: 'sponsorship',
      component: () => import('../pages/Sponsorship.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/Contact.vue')
    },
    {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
