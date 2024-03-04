<script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink } from 'vue-router' 

  const circleCircumference = ref(251.327) // Circonférence d'un cercle de rayon 40
  const strokeDashOffset = ref(circleCircumference.value)

  onMounted(() => {
    // Reset stroke-dashoffset to initiate the animation
    strokeDashOffset.value = circleCircumference.value
  })
</script>

<template>
    <div class="home-wrapper">
      <div class="img-wrapper">
          <img src="/assets/photo_alacon2.png" alt="Ferrier Sammy" />
      </div>
      <div class="content-wrapper">
        <h2>Fullstack Developer</h2>
        <h1>Sammy Ferrier</h1>
        <p>
          I'm a Front-end Web Developer with expertise of React.js, Vue.js, Javascript, HTML and CSS.<br/>
          Fresh graduate of a bachelor degree in web development at HETIC. I'm looking for a web developer job.<br/>
          This portfolio is still in development and is mainly used as a way for me to test different librairies and features but also to show my work.<br/>
        </p>
        <RouterLink to="/contact">
          <button>Contact</button>
        </RouterLink>
      </div>
    </div>
</template>

<style scoped>
  .home-wrapper {
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .img-wrapper {
    padding: 1rem;
    margin-right: 50px;
  }
  .img-wrapper img{
    /* border: 10px solid var(--color-primary);  */
    border-radius: 50%;
    max-width: 450px;
    animation: fillBorder 1s linear;
    animation-fill-mode: forwards;  
  }

  @keyframes fillBorder {
    0% {
      border: 10px solid transparent;
    }
    100% {
      border: 10px solid var(--color-primary);
    }
  }

  .content-wrapper {
    padding: 1rem;
  }

  .content-wrapper h1 {
    font-size: 70px;
    font-weight: bold;
    margin-top: 0.5rem;
    color: var(--color-text-white);
  }

  .content-wrapper h2 {
    font-size: 24px;
    margin-top: 0.5rem;
  }

  .content-wrapper p {
    font-size: 20px;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    max-width: 800px;
  }

  .content-wrapper button {
    background-color: var(--color-background-mute);
    color: var(--color-text);
    border: 2px solid var(--color-primary);
    border-radius: 30px;
    padding: 1rem;
    font-size: 1rem;
    cursor: pointer;
    width: 150px;
  }

</style>