import { createRouter, createWebHistory } from 'vue-router'
import CoalSite from '../views/CoalSite.vue'
import Product from '../views/Product.vue'
import NotFound from '../views/NotFound.vue'
import Contact from '../views/Contact.vue'
import Cart from '../views/Cart.vue'

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
    path: '/contact-us',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
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
