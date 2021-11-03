import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Views/Home.vue'
import menu from '../Views/menu.vue'
import About from '../Views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/menu',
    name: 'menu',
    component: menu
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
