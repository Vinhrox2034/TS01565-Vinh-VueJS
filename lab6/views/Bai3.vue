<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">
      KH News
    </h1>

    <div class="row">
      <div
        class="col-sm-4 mb-4"
        v-for="item in items"
        :key="item.id"
      >
        <div class="card h-100">
          <img :src="item.image" class="card-img-top" />

          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.content }}</p>
            <button class="btn btn-info">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    id: 1,
    title: 'KHNews',
    content:
      'Feb-24-2007, 2:00 AM, GMT +7, Square Enix introduced about the new outcome of the next Kingdom Hearts game...',
    image:
      'https://images.squarespace-cdn.com/content/v1/674f54a350d160336752a565/1733269417458-KNNGWO7RY8LDO49W22QC/thumb-1920-602740.jpg?format=300w'
  },
  {
    id: 2,
    title: 'KHNews',
    content:
      'Jan-2-2012, 5:00 PM, GMT +7, Kingdom Hearts 3D Dream Drop Distance is an action role-playing game...',
    image:
      'https://i.ytimg.com/vi/uv_t2gncZSc/hq720.jpg'
  },
  {
    id: 3,
    title: 'KHNews',
    content:
      'Dec-15-2013, 8:00 AM, GMT +7, Kingdom Hearts III is an action role-playing game...',
    image:
      'https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt1dc45d30c73ebed4/650ea4f740ca7c1dde4b6ab2/Square_20Enix_20Building.jpg'
  }
])
</script>
