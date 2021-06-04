import Vue from 'vue'
import VueRouter from 'vue-router'
import overview from '@/views/Overview.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/overview', name: 'overview', component: overview },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
