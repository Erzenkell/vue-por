<script setup>
    defineProps(['title', 'text'])
</script>

<template>
    <div class="textarea">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
    </div>
</template>

<style scoped>
    .textarea {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.5rem;
    }

    .textarea h2 {
        font-size: 24px;
        color: var(--color-text-white);
    }
</style>