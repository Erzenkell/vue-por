<script setup>
import { ref, defineProps, onMounted } from 'vue';

const props = defineProps(['slides']);
const slides = props.slides;
const currentSlide = ref(0);
const slideCount = ref(slides.length - 1);
const slideLeft = ref(slideCount.value);
const slideRight = ref(1);

function changeSlide(direction) {
    const tmp = currentSlide.value + direction;
    switch (tmp) {
        case -1:
            currentSlide.value = slideCount.value;
            slideLeft.value = slideCount.value - 1;
            slideRight.value = 0;
            break;
        case slideCount.value + 1:
            currentSlide.value = 0;
            slideLeft.value = slideCount.value;
            slideRight.value = 1;
            break;
        case 0:
            slideLeft.value = slideCount.value;
            slideRight.value = tmp + 1;
            currentSlide.value = tmp;
            break;
        case slideCount.value:
            slideLeft.value = tmp-1;
            slideRight.value = 0;
            currentSlide.value = tmp;
            break;
        default:
            slideLeft.value = tmp - 1;
            slideRight.value = tmp + 1;
            currentSlide.value = tmp;
            break;
    }
}

onMounted(() => {
    setInterval(() => {
        changeSlide(1);
    }, 5000);
});
</script>

<template>
    <div class="carousel-wrapper">
        <div class="carousel">
            <div class="slide">
                <div class="image-before">
                    <img :src="slides[slideLeft].image" :alt="slides[slideLeft].alt" />
                </div>
                <div class="slide-image">
                    <span class="arrowbtn arrowbtn-left" @click="changeSlide(-1)"><span class='arrow arrow-left'/></span>
                    <img :src="slides[currentSlide].image" :alt="slides[currentSlide].alt" />
                    <span class="arrowbtn arrowbtn-right" @click="changeSlide(1)"><span class='arrow arrow-right'/></span>
                </div>
                <div class="image-after">
                    <img :src="slides[slideRight].image" :alt="slides[slideRight].alt" />
                </div>
                <p>{{ slides[currentSlide].text }}</p>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .carousel-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .carousel {
        width: 100%;
        height: 100%;
        position: relative;
        max-width: 80vw;
    }

    .slide {
        width: 100%;
        height: 100%;
        max-height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .slide p {
        color: var(--color-text-white);
        font-size: 1.5rem;
        text-align: center;
        padding: 1rem;
    }

    .slide img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .slide-image {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 100%;
        max-width: 60vw;
        max-height: 60vh;
    }

    .image-before {
        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 40vw;
        max-height: 40vh;
        left: 0%;
        top: 15%;
        opacity: 0.5;
        z-index: -1;
    }
    .image-after {
        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 40vw;
        max-height: 40vh;
        left: 50%;
        top: 15%;
        opacity: 0.5;
        z-index: -1;
    }

    .arrowbtn {
        width: 40px;
        height: 40px;
        background: var(--color-primary);
        border:5px solid  var(--color-background-soft);
        border-radius: 50%;
        color: white;
        cursor: pointer;
        left: 50%;
    }
    .arrowbtn-left {
        transform: translateX(50%);
    }

    .arrowbtn-right {
        transform: translateX(-50%);
    }

    .arrow {
        position: relative;
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        border-top: 2px solid white;
        border-right: 2px solid white;
    }

    .arrow-left{
        transform: rotate(-135deg);
        left: 40%;
        top: -10%;
    }

    .arrow-right{
        transform: rotate(45deg);
        left: 30%;
        top: -10%;
    }
</style>