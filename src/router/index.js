import { createRouter, createWebHistory } from 'vue-router'
import CoalSite from '../views/CoalSite.vue'
import Product from '../views/Product.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'CoalSite',
    component: CoalSite
  },
  {
    path: '/meal/:id',
    name: 'Product',
    component: Product,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
