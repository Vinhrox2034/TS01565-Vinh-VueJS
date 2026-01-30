<template>
  <div class="container mt-4">
    <h2 class="text-center text-primary">LAB 5</h2>

    <Bai1 />
    <Bai2 />
    <Bai3 />

    <hr>
    <CreatePost @add="posts.push($event)" />
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Bai1 from './views/Bai1.vue'
import Bai2 from './views/Bai2.vue'
import Bai3 from './views/Bai3.vue'
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'

const posts = ref([])
</script>
