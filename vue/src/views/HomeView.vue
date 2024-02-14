<template>
  <div>
    <DestCard
      v-for="destination in character"
      :key="destination.name"
      :Destination="destination"
    />
  </div>
</template>

<script setup>
import DestCard from "@/components/icons/card.vue";
import character from "@/components/icons/character.js"
</script>

<style scoped></style>
