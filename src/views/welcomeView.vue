<template>
    <SecondLayout>
        <template v-slot:secondLayout>
            <div class="welcome__content">
            <!--  <img class="welcome__img" src="@/assets/svg/pokemon_pikachu.svg" alt="pokemon-img"> -->
                <div class="welcome__img">
                    <img src="@/assets/svg/pokemon_pikachu.svg" alt="pokemon-img">
                </div>
                <div class="welcome__info">
                    <h2 class="title-26">Welcome to Pokédex</h2>
                    <p class="text-18">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
                    <ButtonComponent
                        @click="redirectLayout"
                        class="welcome__button"
                        :text="textButton"/>
                </div>
            </div>
        </template>
    </SecondLayout>
</template> 

<script setup>
import { useRouter } from 'vue-router';
import SecondLayout from '../layouts/SecondLayout.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { ref } from 'vue';

const router = useRouter();
const textButton = ref("Get started");

const redirectLayout = () => {
    router.push('/list');
};


</script>

<style lang="scss" scoped>
</style>