import Vue from 'vue'
import VueRouter from 'vue-router'
import overview from '@/views/Overview.vue'
import education from '@/views/Education.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'overview', component: overview },
  { path: '/overview', name: 'overview', component: overview },
  { path: '/education', name: 'education', component: education },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
