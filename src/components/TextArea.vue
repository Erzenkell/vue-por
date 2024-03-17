<script setup>
    defineProps({
    title: {
        type: String,
        default: "title"
    },
    text: {
        type: String,
        default: "text"
    },
    icon: {
        type: String,
        default: "tel"
    }})
</script>

<template>
    <div class="textarea">
        <img :src="`/assets/icons/${icon}.svg`" class="icon">
        <div>
            <h2>{{ title }}</h2>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<style scoped>
    .textarea {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding: 0.5rem;
    }

    .textarea h2 {
        font-size: 24px;
        color: var(--color-text-white);
    }

    .icon {
        width: 50px;
        height: 50px;
        margin-right: 1rem;
    }
</style>