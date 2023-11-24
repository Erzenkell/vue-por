<script setup>
    import { ref } from 'vue'
    const links = ref([
        {
            name: 'Github',
            link: 'https://github.com/Erzenkell'
        },
    ])
</script>

<template>
    <div class="footer-wrapper">
        <div class="footer-content">
            <div class="footer-content__left">
                <p v-for="link in links" :key="link.name">
                    <a :href="link.link" target="_blank">{{ link.name }}</a>
                </p>
            </div>
            <div class="footer-content__right">
                <p>© 2023 Sammy Ferrier</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .footer-wrapper {
        max-width: 100vw;
        padding: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: var(--color-text);
        border-top: 1px solid var(--color-text);
    }

    .footer-content {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .footer-content__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .footer-content__right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    .footer-content__left h3 {
        font-size: 24px;
        margin: 0;
    }

    .footer-content__left p {
        font-size: 18px;
        margin: 0;
    }

    .footer-content__right p {
        font-size: 18px;
        margin: 0;
    }
</style>