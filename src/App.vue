<script setup>
import { RouterView } from 'vue-router'
import TopNavigation from './components/TopNavigation.vue'
import FooterNavigaton from './components/FooterNavigaton.vue'
</script>

<template>
  <header>
    <TopNavigation />
  </header>
    <RouterView />
  <footer>
    <FooterNavigaton />
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    margin-top: 1rem;
  }
}
</style>
