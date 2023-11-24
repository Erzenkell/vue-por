<script setup>
</script>

<template>
    <div class="home-wrapper">
      <div class="img-wrapper">
        <img src="../assets/kirbok.jpg" alt="Ferrier Sammy" />
      </div>
      <div class="content-wrapper">
        <h2>Fullstack Developer</h2>
        <h1>Sammy Ferrier</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, voluptate quod quos voluptas dolorum
          voluptatibus quae quas natus. Quisquam voluptatum, quibusdam, quia,
          voluptate quod quos voluptas dolorum voluptatibus quae quas natus.
        </p>
        <button>Contact</button>
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
    border: 10px solid var(--color-primary);
    border-radius: 50%;
    max-width: 450px;
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