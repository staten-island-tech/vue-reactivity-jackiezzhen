<template>
    <div class="wish_Card">
        <img class="wish_img" :src="`./src/assets/Character_${wish.img}_icon.webp`" :alt="`${wish.name}`" />
        <img class="wish_rarity" :src="`./src/assets/${wish.rarity}.webp`" :alt="`${wish.rarity} Stars`" />
        <div class="wish_container">
            <img class="wish_path" :src="`./src/assets/Path_${wish.path}.webp`" :alt="`${wish.path}`" />
            <img class="wish_type" :src="`./src/assets/Type_${wish.type}.webp`" :alt="`${wish.type}`" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    wish: Object,
});
</script>

<style scoped>
.wish_Card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    width: 8rem;
    height: 30rem;
    clip-path: ellipse(8rem 10rem at 50% 50%);
    background-color: rgb(40, 40, 40, 1);
}
.wish_container{
    display: flex;
    flex:wrap;
    flex-direction: row;
}
.wish_img {
    width: 98%;
    height: auto;
}
.wish_rarity{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.wish_path,
.wish_type {
    width: 50%;
    height: auto;
}
</style>
