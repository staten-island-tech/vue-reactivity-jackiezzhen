<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="home"><img id="home" width="200rem" src="@/assets/Icon_Home.png" alt="Home"></RouterLink>
        <div class="icons" id="icons">
          <RouterLink to="/wish" class="wish"><img class="id" src="@/assets/Icon_Warp.webp" alt="Wish"></RouterLink>
          <RouterLink to="/characters" class="characters"><img id="characters" src="@/assets/Icon_Characters.webp" alt="Characters"></RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
body, html{
  box-sizing: border-box;
}
.home {
  position: absolute;
  left: 0;
  top: 0.5rem;
  z-index: 1;
  padding: 0;
  margin: 0;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  opacity: 20%;

}

nav a.home.router-link-exact-active {
  opacity: 0%;
}

nav a.wish img,
nav a.characters img {
  width: 10rem;
}

.icons {
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
}

nav a:hover {
  transition: 1s;
  opacity: 50%;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
