import { urls } from "./urls";

export const getPokemonSelected = async(pokemonName) => {

    try {
        const url = `${urls.pokeApi}/${pokemonName}`;
        const resp = await fetch(url);
        if (!resp.ok) {
            throw new Error('Failed to fetch data')
        }
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log("Error fetching data: ", error);
        return null;
    }
}