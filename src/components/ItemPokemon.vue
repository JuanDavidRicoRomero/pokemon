<template>
    <li 
        class="item__content"
        @click="selectedPokemon">
        <span class="title-22">{{ pokemonData.name }}</span>
        <img 
            v-if="isFavorite"
            @click.stop="selectedPokemonFavorite"
            src="@/assets/svg/star_selected.svg"
            alt="star_selected_icon">
        <img 
            v-else
            @click.stop="selectedPokemonFavorite"
            src="@/assets/svg/star_no_selected.svg"
            alt="star_no_selected_icon">
    </li>


</template>

<script setup>
import { defineProps, defineEmits, computed, ref, onMounted, watch } from 'vue';
import { useStore } from 'vuex/dist/vuex.cjs.js';
import { usePokemonData } from '../composables/usePokemonData';
import { useFavorites } from '../composables/useFavorites';
import { getPokemonSelected } from '../helpers/getPokemonSelected';

const store = useStore();
const props = defineProps([
    "pokemonData",
    "selected"
])
const pokemonDetail = ref(null);

const { isLoading, loadPokemons, loadPokemonSelected } = usePokemonData(props.pokemonData);
const { isFavorite, selectedPokemonFavorite } = useFavorites( pokemonDetail );

// Function to sent all information to ListView
const selectedPokemon = () => {
    store.commit('list/setPokemonSelected', pokemonDetail.value);
    store.commit('list/setToggleModal');
}

const loadDetail = async(pokemon) => {
    pokemonDetail.value = await loadPokemonSelected(pokemon);
}

watch(()=> props.pokemonData, (newValue) => {
    if (newValue) {
        loadDetail(newValue);
    }
})

onMounted(() => {
    loadDetail();
})

</script>

<style>

</style>