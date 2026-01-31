<template>
  <div class="col-4 mx-auto">
    <input v-model.number="month" type="number" class="form-control mb-2" placeholder="Nhập tháng">
    <p v-if="month < 1 || month > 12">Tháng không hợp lệ</p>
    <p v-else-if="month <= 2 || month === 12">Mùa Đông</p>
    <p v-else-if="month <= 5">Mùa Xuân</p>
    <p v-else-if="month <= 8">Mùa Hè</p>
    <p v-else>Mùa Thu</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const month = ref(1)
</script>
