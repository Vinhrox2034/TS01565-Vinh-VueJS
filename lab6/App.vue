<template>
  <div class="container mt-4">
    <h2 class="text-center text-primary">LAB 6</h2>

    <nav class="nav nav-pills mb-3 justify-content-center">
      <router-link class="nav-link" to="/bai1">Bài 1</router-link>
      <router-link class="nav-link" to="/bai2">Bài 2</router-link>
      <router-link class="nav-link" to="/bai3">Bài 3</router-link>
      <router-link class="nav-link" to="/bai4">Bài 4</router-link>
      
    </nav>

    <router-view />
  </div>
</template>

<style>
.router-link-active {
  background: #0d6efd;
  color: white;
}
</style>
