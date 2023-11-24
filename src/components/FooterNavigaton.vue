<script setup>
    import { ref } from 'vue'
    import CursorFollower from './CursorFollower.vue';
    const follower = ref(false)
    const links = ref([
        {
            name: 'Github',
            link: 'https://github.com/Erzenkell'
        },
    ])
</script>

<template>
    <div class="footer-wrapper">
        <CursorFollower v-if="follower === true"/>
        <div class="footer-content">
            <div class="footer-content-left">
                <p v-for="link in links" :key="link.name">
                    <a :href="link.link" target="_blank">{{ link.name }}</a>
                </p>
            </div>
            <div class="footer-content-center">
                <div class="section">
                    <label class="switch">
                        <input type="checkbox" @click="follower = !follower">
                        <span class="slider round"></span>
                    </label>
                    <p>Toggle Follower</p>
                </div>
            </div>
            <div class="footer-content-right">
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

    .footer-content-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .footer-content-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    .footer-content-left h3 {
        font-size: 24px;
        margin: 0;
    }

    .footer-content-left p {
        font-size: 18px;
        margin: 0;
    }

    .footer-content-right p {
        font-size: 18px;
        margin: 0;
    }

    .section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 35px;
        height: 20px;
        margin-right: 0.5rem;
    }

    .switch input {
    opacity: 0;
    width: 0;
    height: 0;
    }

    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    }

    .slider:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    }

    input:checked + .slider {
    background-color: #2196F3;
    }

    input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(13px);
    -ms-transform: translateX(13px);
    transform: translateX(13px);
    }

    .slider.round {
    border-radius: 34px;
    }

    .slider.round:before {
    border-radius: 50%;
    }
</style>