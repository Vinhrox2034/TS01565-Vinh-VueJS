<template>
  <div class="p-3 col-6">
    <input v-model="user.name" class="form-control mb-2" placeholder="Tên">
    <input v-model="user.age" class="form-control mb-2" placeholder="Tuổi">
    <input v-model="user.email" class="form-control mb-2" placeholder="Email">

    <div class="bg-dark text-white p-3">
      <p>{{ user.name }}</p>
      <p>{{ user.age }}</p>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const user = reactive({ name:'', age:'', email:'' })
</script>
