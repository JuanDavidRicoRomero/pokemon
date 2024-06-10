<template>
    <div id="list-content-information">

        <loadingComponent v-if="isLoading" />

        <MainLayout v-else>
            <template v-slot:mainLayout>


                <div class="list">
                    <div class="list__content">
                        <form  
                            class="list__form">
                            <img src="@/assets/svg/magnifying_glass.svg" alt="magnifying_glass_icon">
                            <input 
                                class="list__search text-16"
                                type="search"
                                v-model="searchPokemon"
                                placeholder="Search">
                        </form>

                        <ul class="list__listItem" v-if="filteredPokemonList && filteredPokemonList.length > 0">
                            <ItemPokemon
                                v-for="(pokemon, index) in filteredPokemonList" :key="index"
                                :pokemonData="pokemon"/>
                        </ul>
                        <NoDataFound v-else/>

                    </div>
                </div>
            </template>
        </MainLayout>

        <!-- Teleport to Show the modalCard in body -->
        <teleport to="body">
            <PokemonCard 
                v-if="selectedPokemon != null"
                :pokemonData="selectedPokemon"/>
        </teleport>
    </div>
</template>

<script setup>
import { computed , onMounted, ref, watch } from 'vue';
import ItemPokemon from '../components/ItemPokemon.vue';
import MainLayout from '../layouts/MainLayout.vue';
import PokemonCard from '../components/PokemonCard.vue';
import NoDataFound from '../components/NoDataFound.vue';
import loadingComponent from '../components/loadingComponent.vue';
import { useStore } from 'vuex';
import { getPokemons } from '../helpers/getPokemons';
import { usePokemonData } from '../composables/usePokemonData';
import { useFilterSearch } from '../composables/useFilterSearch';

const store = useStore();
const selectedPokemon = computed(()=> store.state.list.pokemonSelected);
const pokemonListDeployed = computed(()=> store.state.list.pokemonListDeployed);

const searchPokemon = ref('');

const { isLoading, loadPokemons, loadPokemonSelected } = usePokemonData();
const { filteredPokemonList } = useFilterSearch(searchPokemon,pokemonListDeployed );

watch(()=> store.state.list.clearSearch, (newValue) => {
    if (newValue) {
        searchPokemon.value = '';
    }
})


onMounted(()=> {
    loadPokemons();
})

</script>

<style lang="scss" scoped>

#list-content-information {
    height: 100%;
}

</style>