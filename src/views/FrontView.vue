<script setup>
  import { ref } from "vue";
  import TextArea from "../components/TextArea.vue";
  import ProgressBar from "../components/ProgressBar.vue";

  const skills = ref([
    {
      name: "HTML",
      text: "HTML is the standard markup language for Web pages. With HTML you can create your own Website.",
      percentage: 100,
    },
    {
      name: "CSS",
      text: "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",
      percentage: 70,
    },
    {
      name: "JavaScript",
      text: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.",
      percentage: 80,
    },
    {
      name: "React",
      text: "React is a JavaScript library for building user interfaces. React makes it painless to create interactive UIs.",
      percentage: 80,
    },
    {
      name: "Vue",
      text: "Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.",
      percentage: 60,
    },
  ])
</script>

<template>
  <div class="frontview-wrapper">
    <div class="title">
      <h1>Front-end skills</h1>
    </div>
    <div class="content-wrapper">
      <div>
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
  .frontview-wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .bar-wrapper {
    width: 100%;
    max-width: 400px;
  }
</style>
