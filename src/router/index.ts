import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Builds from '@/views/Builds.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/builds',
    name: 'builds',
    component: Builds,
    children: [{path: '/', name: 'tankkiller', component: Builds}]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
