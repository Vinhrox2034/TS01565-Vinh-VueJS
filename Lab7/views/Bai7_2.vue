<template>
  <div class="container mt-4 col-4">
    <h3>Đăng nhập</h3>

    <div v-if="!loggedIn">
      <input v-model="email" class="form-control mb-2" placeholder="Email">
      <input v-model="password" type="password" class="form-control mb-2" placeholder="Password">
      <button class="btn btn-primary w-100" @click="login">Login</button>

      <p v-if="error" class="text-danger mt-2">{{ error }}</p>
    </div>

    <div v-else class="text-center">
      <h5>Xin chào {{ email }}</h5>
      <button class="btn btn-danger" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const error = ref('')
const loggedIn = ref(false)

const login = () => {
  if (!email.value.includes('@')) {
    error.value = 'Email không hợp lệ'
    return
  }
  if (password.value.length < 6) {
    error.value = 'Mật khẩu ít nhất 6 ký tự'
    return
  }
  loggedIn.value = true
  error.value = ''
}

const logout = () => loggedIn.value = false
</script>