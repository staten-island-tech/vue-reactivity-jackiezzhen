<template>
  <div class="container">
  <img class=Wish_bg src="../assets/Wish_bg.avif">
  <div class="WarpBtn">
    <button class="Warp1x" v-on:click="iteration(1)">Warp 1×</button>
    <button class="Warp10x" v-on:click="iteration(10)">Warp 10×</button>
  </div>
  <div class=banner>
    <p>{{ num }}</p>
  </div>
  <!-- <img class="banner" src="../assests/banner"> -->
  </div>
</template>

<script setup>
import rates from "@/components/icons/character.js";
import {characters} from "@/components/icons/character.js";
import {ref} from "vue";

const num = ref("");
function random(rate) {
  let total = 0;
  for (let i = 0; i < rate.length; i++) {
    total += rate[i];
  }

  let rand = Math.random() * 100;
  let sum = 0;
  for (let i = 0; i < rate.length; i++) {
    sum += rate[i];
    if (rand < sum) {
      return i;
    }
  }
  return -1;
}
function iteration(times) {
  num.value = "";
  for (let i = 0; i < times; i++) {
    let result = (random(rates));
    console.log(result)
    console.log(characters[result])
    num.value += `Rolled index ${result}\n`;
  }
}
</script>

<style scoped>
html,
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;
}

.banner {
  top: 50%;
  width: 60%;
  height: 60%;
  max-width: 100%;
  background-color: aliceblue;
  color: black;
}

.Wish_bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(0px);
  animation: fadeIn 5s;
}

.banner {
  position: absolute;
  width: 60%;
  height: 60%;
  display: flex;
  transform: translateY(-50%);
  justify-content: center;
  background-color: aliceblue;
}

.WarpBtn {
  position: absolute;
  display: flex;
  width: 35%;
  bottom: 0;
  right: 5%;
  gap: 1rem;
  animation: slideup 3s forwards;
  overflow: hidden;
}

.Warp1x,
.Warp10x {
  display: flex;
  border-radius: 2rem;
  padding: 2rem;
  width: 100%;
  height: 5vh;
  align-items: center;
  justify-content: center;
  border: 3px solid rgb(255, 255, 255);
  transition: 0.5s;
  font: bold 30px Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: rgb(173, 129, 248);
  overflow: hidden;
}

.Warp1x:active, .Warp10x:active {
  opacity: 80%;
  transition: 0s;
}

button:hover {
  box-sizing: border-box;
  cursor: pointer;
  /* border:3px solid rgb(0, 255, 255, 0.1); */
  background-color: rgba(98, 58, 255, 0.7);
  border: 3px solid rgb(100, 100, 100);
}

@keyframes fadeIn {
  0% {
    filter: blur(0px);
  }

  100% {
    filter: blur(0px);
  }
}

@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}

@keyframes slideup {
  to {
    bottom: 4%;
  }
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}</style>
