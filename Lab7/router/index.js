import { createRouter, createWebHistory } from 'vue-router'

import Bai1 from '../views/Bai7_1.vue'
import Bai2 from '../views/Bai7_2.vue'
import Bai3 from '../views/Bai7_3.vue'
import Bai4 from '../views/Bai7_4.vue'

const routes = [
  { path: '/lab7/bai1', component: Bai1 },
  { path: '/lab7/bai2', component: Bai2 },
  { path: '/lab7/bai3', component: Bai3 },
  { path: '/lab7/bai4', component: Bai4 }
]

export default createRouter({
  history: createWebHistory(),
  routes
})