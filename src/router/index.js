import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import ProductPageView from '../views/ProductPageView.vue'
import LoginView from '../views/auth/LoginView.vue'


const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainView
  },
  {
    path: '/product',
    name: 'ProductPage',
    component: ProductPageView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
