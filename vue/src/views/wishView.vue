<template>
  <div>
      <button v-on:click="console.log("ahhh")">ggtyj</button>
    </div>
  </template>
  
  <script setup>
    const rates = [1, 16, 23, 50]
    function random(rates) {
      let sum = 0;
      rates.forEach(function(chance) {
          sum+=chance;
      });
      let rand = Math.random();
      let chance = 0;
      for(let i=0; i<rates.length; i++) {
          chance+=rates[i]/sum;
          if(rand<chance) {
              return i;
          }
          return -1;
      }}
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