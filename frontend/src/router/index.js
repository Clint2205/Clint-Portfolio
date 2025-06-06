import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', redirect: '/' }  // catch-all to Home
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
