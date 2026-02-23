<template>
  <div class="container mt-4 col-5">
    <h3>Đăng ký</h3>

    <input v-model="name" class="form-control mb-2" placeholder="Họ tên">
    <input v-model="email" class="form-control mb-2" placeholder="Email">
    <input v-model="password" type="password" class="form-control mb-2" placeholder="Mật khẩu">
    <input v-model="dob" type="date" class="form-control mb-2">

    <div class="mb-2">
      <label class="me-2">Giới tính:</label>
      <input type="radio" value="Nam" v-model="gender"> Nam
      <input type="radio" value="Nữ" v-model="gender" class="ms-2"> Nữ
    </div>

    <div class="mb-2">
      <label>Ngôn ngữ:</label>
      <select v-model="language" class="form-control">
        <option>Việt</option>
        <option>English</option>
        <option>Japan</option>
      </select>
    </div>

    <button class="btn btn-success" @click="submitForm">Đăng ký</button>

    <div v-if="submitted" class="alert alert-info mt-3">
      <p>Tên: {{ name }}</p>
      <p>Email: {{ email }}</p>
      <p>Ngày sinh: {{ dob }}</p>
      <p>Giới tính: {{ gender }}</p>
      <p>Ngôn ngữ: {{ language }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const dob = ref('')
const gender = ref('Nam')
const language = ref('Việt')
const submitted = ref(false)

const submitForm = () => submitted.value = true
</script>