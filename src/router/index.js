import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Feature from '../views/Feature.vue'
import Contact from '../views/Contact.vue'
import Blog2 from '../views/Blog2.vue'
 
Vue.use(VueRouter)

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
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/feature',
    name: 'Feature',
    component: Feature
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

  {
    path: '/blog2',
    name: 'Blog2',
    component: Blog2
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
