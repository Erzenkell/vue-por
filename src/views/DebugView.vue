<script setup>
import Toaster from "../components/ToastComponent.vue";
import useToasterStore from "../store/useToasterStore";

const toasterStore = useToasterStore();

const successToast = () => toasterStore.addToast({ message: "Test" });
</script>


<template>
    <div class="page-wrapper">
        <Toaster />
        <div>
            <p>Toast test</p>
            <button @click="successToast">Click me!</button>
        </div>
    </div>
</template>
  

<style scoped>
.page-wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
    width: 100px;
    height: 50px;
    padding: 1rem;
    background-color: var(--color-primary);
    color: var(--color-text-white);
    border-radius: 5px;
}
</style>