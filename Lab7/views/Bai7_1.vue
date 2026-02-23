<template>
  <div class="container mt-4">
    <h3>Quản lý công việc</h3>

    <form @submit.prevent="addTask" class="mb-3">
      <input v-model="task" class="form-control mb-2" placeholder="Nhập công việc">
      <button class="btn btn-primary">Thêm</button>
    </form>

    <ul class="list-group">
      <li v-for="(t,i) in tasks" :key="i" class="list-group-item d-flex justify-content-between">
        {{ t }}
        <button class="btn btn-danger btn-sm" @click="removeTask(i)">Xóa</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const task = ref('')
const tasks = ref([])

const addTask = () => {
  if (!task.value) return
  tasks.value.push(task.value)
  task.value = ''
}

const removeTask = (i) => tasks.value.splice(i,1)
</script>