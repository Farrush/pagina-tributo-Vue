import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Builds from '@/views/Builds.vue'
import Antitank from '@/views/builds/Antitank.vue'
import Assassin from '@/views/builds/Assassin.vue'
import Goredrinker from '@/views/builds/Goredrinker.vue'
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
    redirect:'antitank',
    children: 
    [
      {path: '/antitank', name: 'anti-tanque', component: Antitank},
      {path: '/assassin', name: 'assassino', component: Assassin},
      {path: '/goredrinker', name: 'hemodrenario', component: Goredrinker}
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
