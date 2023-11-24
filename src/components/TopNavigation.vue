<script setup>
    import { ref } from 'vue'
    import { RouterLink } from 'vue-router' 
    const pages = ref([
        {
            name: 'About',
            link: '/'
        },
        {
            name: 'Front-end skills',
            link: '/front'
        },
        {
            name: 'Back-end skills',
            link: '/back'
        },
        {
            name: 'Projects',
            link: '/projects'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
    ])
</script>

<template>
    <div class="header-wrapper">
        <img class="logo" src="../assets/logo.jpg" alt="Logo" />
        <nav>
            <RouterLink v-for="page in pages" :key="page.name" :to="page.link">
                {{ page.name }}
            </RouterLink>
        </nav>
    </div>
</template>

<style scoped>
    .header-wrapper {
        color: var(--color-primary);
        width: 100vw;
        padding: 2rem;
        display: flex;
        flex-direction: row;
    }

    nav {
        width: 100%;
        font-size: 18px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: end;
    }

    nav a.router-link-exact-active {
        color: var(--color-text);
    }

    nav a {
        display: inline-block;
        padding: 0 1rem;
    }

    nav a:first-of-type {
        border: 0;
    }

    .logo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0 auto;
        display: block;
    }
</style>