<template>
  <div class="container mt-4">
    <h2 class="text-center text-primary">LAB 7
    </h2>

    <nav class="nav nav-pills mb-3 justify-content-center">
    <router-link to="/lab7/bai1" class="btn btn-dark m-1">Bài 1</router-link>
    <router-link to="/lab7/bai2" class="btn btn-dark m-1">Bài 2</router-link>
    <router-link to="/lab7/bai3" class="btn btn-dark m-1">Bài 3</router-link>
    <router-link to="/lab7/bai4" class="btn btn-dark m-1">Bài 4</router-link>
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
