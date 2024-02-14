<template>
<div>
    <button @click="random"></button>
  </div>
</template>

<script setup>
  function random(){
    Math.random();
  }
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>