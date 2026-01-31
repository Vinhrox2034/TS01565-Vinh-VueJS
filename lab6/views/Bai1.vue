<template>
  <div class="col-4 mx-auto">
    <input v-model.number="score" type="number" class="form-control mb-2" placeholder="Nhập điểm">
    <p v-if="score >= 9">Xuất sắc</p>
    <p v-else-if="score >= 8">Giỏi</p>
    <p v-else-if="score >= 6.5">Khá</p>
    <p v-else-if="score >= 5">Trung bình</p>
    <p v-else>Yếu</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const score = ref(0)
</script>
