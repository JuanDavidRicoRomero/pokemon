import { ref, watch, computed } from "vue";
import { useStore } from 'vuex';


export function useFilterSearch(searchPokemon, pokemonListDeployed) {

    const store = useStore();
    const filteredPokemonList = computed(() => {
        if(searchPokemon.value) {
            store.commit('list/setClearSearch', false);
            return pokemonListDeployed.value.filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchPokemon.value.toLowerCase())
            );
        } else {
            return pokemonListDeployed.value
        }
    })

    return { filteredPokemonList };

}