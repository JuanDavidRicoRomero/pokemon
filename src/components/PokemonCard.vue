<template>
    <div class="pokemon-modal">
        <div class="pokemon-modal__background"></div>
            <div class="pokemon-modal__content">
                <div class="pokemon-modal__img">
                    <img src="@/assets/images/landscape.png" alt="landscape_image">
                    <img @click="closeModalFunction" id="icon-close" src="@/assets/svg/x_icon.svg" alt="x_icon">
                    <img 
                        v-show="!imageLoaded"
                        id="loading-img"
                        src="@/assets/svg/loader_pokemon.svg" 
                        alt="loading_icon">
                    <span v-show="!imageLoaded">Loading</span>
                    <img 
                        v-show="imageLoaded"
                        id="pokemon-img"
                        :src="pokemonData.sprites.other['official-artwork'].front_default"
                        alt="pokemon_show_image"
                        @load="onImageLoad">
                </div>

                <div class="description title-18 margin-ct"><span>Name:</span>{{ pokemonData.name }}</div>
                <div class="description title-18"><span>Weight:</span> {{ pokemonData.weight }}</div>
                <div class="description title-18"><span>Height:</span> {{ pokemonData.height }}</div>
                <div class="description title-18"><span>Types:</span>
                    {{ pokemonData.types.map(type => type.type.name).join(', ') }}
                </div>
                <div class="pokemon-modal__footer">
                    <ButtonComponent
                    @click="copyToClipBoard"
                    @touchend="copyToClipBoard" 
                    :text="'Share to my friends'"
                    :classButton="'button__modal-button'"
                    :classDiv="'button__modal-div'"/>
                    <img
                        v-if="isFavorite"
                        @click.stop="selectedPokemonFavorite"
                        src="@/assets/svg/star_selected.svg"
                        alt="star-seleceted-icon">
                    <img 
                        v-else
                        @click.stop="selectedPokemonFavorite"
                        src="@/assets/svg/star_no_selected.svg"
                        alt="star_no_selected_icon">
                </div>
            </div>
    </div>


</template>
<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
import { defineProps, ref, computed, onMounted, watch, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { getPokemonSelected } from '../helpers/getPokemonSelected';
import { useFavorites } from '../composables/useFavorites';
import { usePokemonData } from '../composables/usePokemonData';
import { useCopyClipBoard } from '../composables/useCopyClipBoard';

const store = useStore();
const props = defineProps([
    "pokemonData",
])

const pokemonDetail = ref(null);
const imageLoaded = ref(false);

const { isLoading, loadPokemons, loadPokemonSelected } = usePokemonData(props.pokemonData);
const { isFavorite, selectedPokemonFavorite } = useFavorites( pokemonDetail );
const { copyToClipBoard } = useCopyClipBoard(pokemonDetail);

const onImageLoad = () => {
    imageLoaded.value = true;
}

// Function to closeModal
const closeModalFunction = () => {
    store.commit('list/setToggleModal');
    store.commit('list/setPokemonSelected', null);
}

const preLoadImage = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onLoad = () => resolve(img);
        img.onerror = reject;
        img.src = url;
    });
}

const loadDetail = async(pokemon) => {
    pokemonDetail.value = await loadPokemonSelected(pokemon);
}

onMounted(() => {
    loadDetail();
})
</script>

<style lang="scss" scoped>
    .margin-ct {
        margin-top: 2rem;
        padding-top: 0rem;
    }
</style>
