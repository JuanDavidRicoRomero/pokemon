import { getPokemons } from "../../../helpers/getPokemons"
export default {
    namespaced: true,
    state: {
        pokemonListDeployed : null,
        pokemonList: null,
        pokemonSelected: null,
        pokemonListFavorites: [],
        pokemonModal: false,
        clearSearch: false,
        showButtonsFooter: true,
    },
    mutations: {
        setPokemonList(state, payload) {
            state.pokemonList = payload;
            if (state.pokemonListDeployed === null) {
                state.pokemonListDeployed = payload;
            }
        },
        setPokemonSelected(state, payload) {
            state.pokemonSelected = payload;
        },
        setPokemonListFavorites(state, payload) {
            const index = state.pokemonListFavorites.findIndex(pokemon => pokemon.id === payload.id )
            if (index !== -1) {
                state.pokemonListFavorites.splice(index,1)
            } else {
                state.pokemonListFavorites.push(payload)
            }
        },
        setToggleModal(state) {
            state.pokemonModal = !state.pokemonModal;
        },
        setPokemonListDeployed(state, payload) {
            state.pokemonListDeployed = payload
        },
        setClearSearch(state, payload) {
            state.clearSearch = payload;
        },
        setShowButtonsFooter(state) {
            state.showButtonsFooter = !state.showButtonsFooter;
        }
    },
    getters: {

    }
}