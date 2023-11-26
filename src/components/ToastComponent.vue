<script setup>
    import useToasterStore from '../store/useToasterStore'

    const toastStore = useToasterStore()
</script>

<template>
    <Teleport to="body">
        <ul v-if="toastStore.toasts.length" class="toast-wrapper">
            <li class="toast" v-for="toast in toastStore.toasts" :key="toast.id">
                {{ toast.message.message }}
            </li>
        </ul>
    </Teleport>
</template>

<style scoped>
.toast-wrapper {
    position: fixed;
    display: flex;
    flex-direction: column;
    bottom: 1%;
    right: 1%;
    z-index: 9999;
    list-style: none;
    gap: 1rem;
}

.toast {
    padding: 1rem;
    background-color: var(--color-primary);
    color: var(--color-text-white);
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    animation: slideIn 0.5s ease-in-out;
    animation-fill-mode: forwards;
}

@keyframes slideIn {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0%);
    }
}
</style>