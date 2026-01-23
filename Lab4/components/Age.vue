<script setup>
    import { ref,computed } from 'vue';
const year = ref(null);
const age = computed(()=>{
    if(!year.value) return null;
    const currentYear = new Date().getDate()
    return currentYear
});
</script>
<template>
    <h1>Your age {{ age }}</h1>
    <input v-model ="year" placeholder="enter your BR"/>
</template>
