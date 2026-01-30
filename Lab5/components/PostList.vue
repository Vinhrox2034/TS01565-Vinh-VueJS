<template>
  <div v-for="(p,i) in posts" :key="i"
       :class="['card p-3 mb-3', i%2===0?'bg-light':'bg-info text-white']"
       :style="{borderRadius:'20px'}">
    <h5>{{ p.title }}</h5>
    <small>{{ p.author }}</small>
    <p>{{ p.content }}</p>
  </div>
</template>

<script setup>
defineProps(['posts'])
</script>
