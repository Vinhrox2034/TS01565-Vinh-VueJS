<template>
  <div class="container mt-4 col-5">
    <h3>Login + Comment</h3>

    <LoginComponent v-if="!user" @login="handleLogin" />
    <CommentComponent v-else :user="user" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginComponent from '../components/LoginComponent.vue'
import CommentComponent from '../components/CommentComponent.vue'

const user = ref('')

const handleLogin = (username) => {
  user.value = username
}
</script>