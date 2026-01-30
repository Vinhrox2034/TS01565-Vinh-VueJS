<template>
  <div class="p-3">
    <input v-model="text" class="form-control">
    <p>Bạn nhập: {{ text }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('FPL')
</script>
