<template>

    <SecondLayout>
        <template v-slot:secondLayout>
            <div class="loading__content">
                <div class="loading__img">
                    <img src="@/assets/svg/loader_pokemon.svg" alt="loading_icon">
                </div>
                <h1 class="loading__title title-36">Loading</h1>
            </div>
        </template>
    </SecondLayout>
</template>

<script setup>
import { onMounted } from 'vue';
import SecondLayout from '../layouts/SecondLayout.vue';

</script>

<style lang="scss" scoped>

.loading {

    &__content {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0rem auto;
    }

    &__img {
        width: 50%;
        height: auto;
        animation: spin 2s linear infinite;
        -webkit-animation: spin 2s linear infinite;
    }

    &__title {
        margin-top: 2rem;
        font-family: 'Lato';
        font-style: normal;
    }
}

/* Animations */

@keyframes spin {
    0% { transform: rotate(0deg); -webkit-transform: rotate(0deg); -moz-transform: translate(-50%, -50%) rotate(0deg); -ms-transform: translate(-50%, -50%) rotate(0deg); -o-transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: rotate(360deg); -webkit-transform: rotate(360deg); -moz-transform: translate(-50%, -50%) rotate(360deg); -ms-transform: translate(-50%, -50%) rotate(360deg); -o-transform: translate(-50%, -50%) rotate(360deg); }
}

</style>