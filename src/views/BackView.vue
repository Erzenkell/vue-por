<script setup>
  import { ref } from "vue";
  import TextArea from "../components/TextArea.vue";
  import ProgressBar from "../components/ProgressBar.vue";

  const skills = ref([
    {
      name: "Node.js",
      text: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
      percentage: 80,
    },
    {
      name: "Python",
      text: "Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.",
      percentage: 70,
    },
    {
      name: "PHP",
      text: "PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994.",
      percentage: 60,
    }
  ])
</script>

<template>
  <div class="backend-wrapper">
    <div class="title">
      <h1>Back-end skills</h1>
    </div>
    <div class="content-wrapper">
      <div class="text-wrapper">
        <TextArea v-for="skill in skills" :key="skill.name" :title="skill.name" :text="skill.text" />
      </div>
      <div class="bar-wrapper">
        <h2>Coding Skills</h2>
        <ProgressBar v-for="skill in skills" :key="skill.name" :title="skill.name" :percentage="skill.percentage" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .backend-wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .backend-wrapper h1 {
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
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    max-width: 100vw;
    width: 100%;
  }

  .text-wrapper {
    width: 100%;
    max-width: 50vw;
  }
  .bar-wrapper {
    width: 100%;
    max-width: 30vw;
  }
</style>
