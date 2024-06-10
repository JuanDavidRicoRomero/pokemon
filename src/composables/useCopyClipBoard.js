import { ref, computed } from "vue";
import { useStore } from "vuex/dist/vuex.cjs.js";

export function useCopyClipBoard(pokemonDetail) {

    const copyToClipBoard = async(event) => {
    
        event.preventDefault();
    
        try {
            const textToCopy = `Name: ${pokemonDetail.value.name},
             Weight: ${pokemonDetail.value.weight}, Height: ${pokemonDetail.value.height},
             Types: ${pokemonDetail.value.types.map(type => type.type.name).join(', ')}`
    
            await navigator.clipboard.writeText(textToCopy);
            alert('Pokemon attributes copied!')
        } catch (error) {
            console.log('Failed to copy!', error);
        }
    }

    return { copyToClipBoard }


}