<template>
  <div>
    <input v-model="username" class="form-control mb-2" placeholder="Tên người dùng">
    <button class="btn btn-primary" @click="$emit('login', username)">Đăng nhập</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const username = ref('')
</script>