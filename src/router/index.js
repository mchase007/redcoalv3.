import { createRouter, createWebHistory } from 'vue-router'
import CoalSite from '../views/CoalSite.vue'

const routes = [
  {
    path: '/',
    name: 'CoalSite',
    component: CoalSite
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
