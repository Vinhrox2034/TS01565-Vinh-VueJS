import { createRouter, createWebHistory } from 'vue-router'

import Bai1 from '../components/Bai1.vue'
import Bai2 from '../components/Bai2.vue'
import Bai3 from '../components/Bai3.vue'
import CreatePost from '../views/CreatePost.vue'
import PostList from '../views/PostList.vue'

const routes = [
  { path: '/', component: PostList },
  { path: '/bai1', component: Bai1 },
  { path: '/bai2', component: Bai2 },
  { path: '/bai3', component: Bai3 },
  { path: '/create', component: CreatePost },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
