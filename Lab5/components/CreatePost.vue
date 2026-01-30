<template>
  <input v-model="post.title" class="form-control mb-2" placeholder="Tiêu đề">
  <input v-model="post.author" class="form-control mb-2" placeholder="Tác giả">
  <textarea v-model="post.content" class="form-control mb-2"></textarea>
  <button class="btn btn-primary" @click="add">Đăng</button>
</template>

<script setup>
import { reactive } from 'vue'
const emit = defineEmits(['add'])
const post = reactive({title:'',author:'',content:''})
const add = () => {
  emit('add', {...post})
  post.title = post.author = post.content = ''
}
</script>
