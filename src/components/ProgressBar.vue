<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'
    const props = defineProps(['title', 'percentage'])

    const progress = ref(0)
    const interval = ref(null)

    onMounted(() => {
        interval.value = setInterval(() => {
            progress.value += 1
            if (progress.value >= props.percentage) {
                clearInterval(interval.value)
            }
        }, 10)
    })

    onUnmounted(() => {
        clearInterval(interval.value)
    })
</script>

<template>
    <div class="progress-bar-wrapper">
        <div>
            {{ props.title }}: {{ progress }}%
        </div>
        <div class="progress-bar-outline">
            <div class="progress-bar" :style="{ width: `${progress}%` }" />
        </div>
    </div>
</template>

<style scoped>
    .progress-bar-wrapper {
        width: 100%;
        max-width: 30vw;
        padding: 1rem;
    }

    .progress-bar-outline {
        width: 100%;
        height: 15px;
        border: 1px solid var(--color-primary);
        border-radius: 8px;
        display: flex;
        align-items: center;
    }
    .progress-bar {
        height: 100%;
        background-color: var(--color-primary);
        height: 9px;
        border-radius: 8px;
        margin-left: 1px;
    }
</style>