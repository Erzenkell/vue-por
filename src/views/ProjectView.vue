<script setup>
</script>

<template>
  <div class="project-wrapper">
    <div class="title">
      <h1>Projects</h1>
    </div>
    <div class="content-wrapper">
      <div class="text-wrapper">
      </div>
    </div>
  </div>
</template>

<style>
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
</style>
