import { ref, computed, watch } from "vue";
import { useStore } from 'vuex';

export function useFavorites(pokemonDetail) {

    const store = useStore();
    /* const pokemonDetail = ref(pokemonInfo); */

    // Function to check if the input pokemon is in favoriteList
    const isFavorite = computed(() => {
        if (!pokemonDetail.value || pokemonDetail.value.name === undefined) {
            return false;
        }
        return store.state.list.pokemonListFavorites.some( pokemon => pokemon.name === pokemonDetail.value.name);
    });

    const selectedPokemonFavorite = () => {
        store.commit('list/setPokemonListFavorites', pokemonDetail.value);
    }

    watch(() => pokemonDetail.value, (newDetail) => {
        // console.log("DENTRO WATCH USEFAVORITE: ", newDetail);
    })

    return { isFavorite, selectedPokemonFavorite }


}