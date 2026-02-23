<template>
  <div class="mt-3">
    <h5>Bình luận của {{ user }}</h5>

    <input v-model="comment" class="form-control mb-2" placeholder="Nhập bình luận">
    <button class="btn btn-success" @click="addComment">Gửi</button>

    <ul class="list-group mt-3">
      <li v-for="(c,i) in comments" :key="i" class="list-group-item">
        {{ c }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['user'])

const comment = ref('')
const comments = ref([])

const addComment = () => {
  if (!comment.value) return
  comments.value.push(comment.value)
  comment.value = ''
}
</script>