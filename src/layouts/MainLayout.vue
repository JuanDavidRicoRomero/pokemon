<template>
    <div class="main-layout">
        <slot name="mainLayout"></slot>

        <div class="main-layout__footer" v-if="showButtonsFooter">
            <ButtonComponent 
                @click="showAllPokemons"
                :text="'All'"
                :classButton="`button__left-list ${backgroundColorButtonAll}`"
                :classDiv="'button__div-left'"
                :icon="'bars'"/>
            <ButtonComponent
                @click="showFavoritesPokemons"
                :text="'Favorites'"
                :classButton="`button__right-list ${backgroundColorButtonFavorites}`"
                :classDiv="'button__div-right'"
                :icon="'star'"/>
        </div>

    </div>
</template>
<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { computed, ref } from "vue";
import { useStore } from 'vuex';

const store = useStore();

const pokemons = computed(()=> store.state.list.pokemonList);
const favoritesPokemons = computed(()=> store.state.list.pokemonListFavorites);
const showButtonsFooter = computed(()=> store.state.list.showButtonsFooter);

const backgroundColorButtonAll = ref('');
const backgroundColorButtonFavorites = ref('');

const showAllPokemons = () => {
    store.commit('list/setPokemonListDeployed', pokemons.value);
    store.commit('list/setClearSearch', true);
    backgroundColorButtonAll.value = 'button__active';
    backgroundColorButtonFavorites.value = 'button__disabled';
}

const showFavoritesPokemons = () => {
    store.commit('list/setPokemonListDeployed', favoritesPokemons.value);
    store.commit('list/setClearSearch', true);
    backgroundColorButtonAll.value = 'button__disabled';
    backgroundColorButtonFavorites.value = 'button__active';
}

</script>

<style scoped>

</style>