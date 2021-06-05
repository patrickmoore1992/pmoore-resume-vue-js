import Vue from 'vue'
import VueRouter from 'vue-router'
import overview from '@/views/Overview.vue'
import education from '@/views/Education.vue'
import experience from '@/views/WorkExperience.vue'
import contact from '@/views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'overview', component: overview },
  { path: '/overview', name: 'overview', component: overview },
  { path: '/experience', name: 'experience', component: experience },
  { path: '/education', name: 'education', component: education },
  { path: '/contact', name: 'contact', component: contact },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
