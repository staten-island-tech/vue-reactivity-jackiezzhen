<template>
  <div class="dest">
    <DestCard
      v-for="destination in character"
      :key="destination.name"
      :Destination="destination"
    />
    
  </div>
</template>

<script setup>
import DestCard from "@/components/icons/card.vue";
import character from "@/components/icons/character.js";
</script>

<style scoped>
.dest{
    position: relative;
    max-width: 80%;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    top:20rem;
}
</style>
