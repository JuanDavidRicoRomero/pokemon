import { ref, watch } from "vue";
import { getPokemonSelected } from "../helpers/getPokemonSelected";
import { getPokemons } from "../helpers/getPokemons";
import { useStore } from 'vuex';


export function usePokemonData(pokemon) {

    const store = useStore();
    /* const pokemonDetail = ref(null); */
    const isLoading = ref(false);
    const pokemonSelected = ref(pokemon);

    const loadPokemons = async() => {
        try {
            isLoading.value = true;
            const data = await getPokemons();
            //Simulate a delay
            await new Promise(resolve => setTimeout(resolve, 1000));
        
            if (data) {
                store.commit('list/setPokemonList', data["results"]);
            }
            isLoading.value = false;

        } catch (error) {
            console.log("Faild error", error);
            return null;
        }
    
    };


    const loadPokemonSelected = async(pokemoninfo = pokemonSelected.value) => {
        try {
            const data = await getPokemonSelected(pokemoninfo["name"]);
            if (data) {
                //pokemonDetail.value = data; 
                return data;
            }
        } catch ( error ) {
            console.log('Failed error', error);
            return null;
        }
    }

    watch(()=> pokemon, (newValue) => {
        pokemonSelected.value = newValue;
    }, { deep: true });

    return { isLoading, loadPokemons, loadPokemonSelected };

}