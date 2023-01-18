import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsView from '../views/ContactsView.vue'
import ClavierView from '../views/ClavierView.vue'

const routes = [
  {
    path: '/',
    name: 'appels',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
