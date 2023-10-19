<script lang="ts" setup>
import BaseButton from "./../BaseButton.vue";
import { ref } from "vue";
import Loading from "./../Loading.vue";

const isLoaded = ref(false);

const props = defineProps<{
  id: number;
  imageUrl: string;
  ingredients: string;
  name: string;
  totalCost: string;
}>();

function hideLoading() {
  isLoaded.value = true;
}
</script>

<template>
  <div class="pizzaItemWrapper">
    <div v-show="!isLoaded" class="loadingWrapper">
      <Loading />
    </div>
    <div v-show="isLoaded" class="imageWrapper">
      <img class="imagePizza" :src="imageUrl" :alt="name" @load="hideLoading" />
    </div>
    <section class="pizzaDetails">
      <h3 class="pizzaTitle">{{ name }}</h3>
      <p class="pizzaIngredients">{{ ingredients }}</p>
      <menu class="pizzaMenu">
        <span class="pizzaCost">{{ totalCost }}</span>
        <BaseButton />
      </menu>
    </section>
  </div>
</template>

<style lang="sass" scoped>
.pizzaItemWrapper
    display: flex
    flex-direction: column
.loadingWrapper
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 15rem
.imageWrapper
    display: flex
    justify-content: center
    align-items: center
    max-width: 20rem
    min-width: 8rem
    overflow: hidden
    align-self: center
.imagePizza
    width: 100%
    height: 100%
    object-fit: contain
.pizzaDetails
    padding: 0 2rem 0 2rem
.pizzaTitle
.pizzaIngredients
.pizzaMenu
    width: 100%
    padding: 0
    display: flex
    justify-content: space-between
.pizzaCost
    font-size: 1.5rem
</style>
