<template>
  <div class="no-data">
    <h1 class="title-36">Uh-oh!</h1>
    <p class="text-20">You look lost on your journey!</p>
    <ButtonComponent
      @click="redirectLayout"
      :text="'Go back home'"/>
  </div>

</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import ButtonComponent from './ButtonComponent.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();

const redirectLayout = () => {
    router.push('/');
};


onMounted(()=> {
  store.commit('list/setShowButtonsFooter');
});

onUnmounted(() => {
  store.commit('list/setShowButtonsFooter');
});

</script>
<style lang="scss" scoped>

.no-data {
    margin-top: 1rem;

    h1 {
        font-style: normal;
        margin-bottom: 1rem;
        line-height: 4.32rem;
    }

    p {
        font-style: normal;
        font-weight: 500;
        margin-top: 1rem;
        margin-bottom: 2.5rem;

    }
}


</style>