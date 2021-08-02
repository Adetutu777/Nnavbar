import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue'
import Careers from '../views/Careers.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/careers',
    name: 'Careers',
    component:Careers
  },
  {
    path: '/contact',
    name: 'Contact',
    component:Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
