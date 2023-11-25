<script setup>
    import CarouselComponent from '../components/CarouselComponent.vue';
    import { ref } from 'vue';
    const slides = ref([
        {
            image: '/src/assets/projects/project-academy.png',
            alt: 'First slide',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        },
        {
            image: '/src/assets/projects/project-discord.png',
            alt: 'Second slide',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        {
            image: '/src/assets/projects/project-whogotnext.png',
            alt: 'Third slide',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
        },
    ])
</script>

<template>
  <div class="project-wrapper">
    <div class="content-wrapper">
        <CarouselComponent  :slides="slides" />
    </div>
  </div>
</template>

<style scoped>
  .project-wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .project-wrapper h1 {
    color: var(--color-text-white);
  }

  .title {
    padding: 1rem;
    height: 200px;
    max-height: 20vh;
    width: 100%;
    background-color: #252525;
    border-bottom: 1px solid var(--color-text);
    border-top: 1px solid var(--color-text);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
