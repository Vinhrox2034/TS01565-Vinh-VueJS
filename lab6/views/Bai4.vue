<template>
  <div class="row">
    <div class="col-4">
      <input v-model="form.name" class="form-control mb-2" placeholder="Tên">
      <input v-model="form.score" type="number" class="form-control mb-2" placeholder="Điểm">
      <input v-model="form.dob" type="date" class="form-control mb-2">
      <button class="btn btn-primary" @click="save">
        {{ edit === -1 ? 'Thêm' : 'Cập nhật' }}
      </button>
    </div>

    <div class="col-8">
      <table class="table">
        <tr>
          <th>Tên</th><th>Điểm</th><th>Ngày sinh</th><th></th>
        </tr>
        <tr v-for="(s,i) in students" :key="i">
          <td>{{ s.name }}</td>
          <td>{{ s.score }}</td>
          <td>{{ s.dob }}</td>
          <td>
            <button class="btn btn-warning btn-sm" @click="editStudent(i)">Sửa</button>
            <button class="btn btn-danger btn-sm" @click="students.splice(i,1)">Xóa</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const students = ref([])
const form = ref({ name:'', score:'', dob:'' })
const edit = ref(-1)

const save = () => {
  if(edit.value === -1) students.value.push({...form.value})
  else students.value[edit.value] = {...form.value}
  form.value = { name:'', score:'', dob:'' }
  edit.value = -1
}

const editStudent = (i) => {
  form.value = {...students.value[i]}
  edit.value = i
}
</script>
