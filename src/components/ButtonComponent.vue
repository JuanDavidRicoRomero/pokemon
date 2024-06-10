<template>
  <div :class="classDiv">
    <button 
        :class="classButton"
        class="button__basic title-18">
          <img v-if="icon === 'star'" src="@/assets/svg/star_white.svg" alt="star_white_icon">
          <img v-else-if="icon === 'bars'" src="@/assets/svg/bars.svg" alt="bars_all_icon">
          {{ props.text }}
      </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps([
    "text",
    "clickTo",
    "classDiv",
    "classButton",
    "icon"
  ])

</script>

<style>

</style>