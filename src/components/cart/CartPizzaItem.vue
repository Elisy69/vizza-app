<script lang="ts" setup>
import { ref } from "vue";
import Loading from "./../Loading.vue";
import { useUserStore } from "@store/user";

const userStore = useUserStore();
const isLoaded = ref(false);

defineProps<{
  id: number;
  imageUrl: string;
  name: string;
  totalCost: string;
}>();

function hideLoading() {
  isLoaded.value = true;
}
</script>

<template>
  <div class="cart-pizza-item">
    <div v-show="!isLoaded" class="cart-pizza-item__loading-wrapper">
      <Loading />
    </div>
    <div v-show="isLoaded" class="cart-pizza-item__image-wrapper">
      <img
        class="cart-pizza-item__pizza-image"
        :src="imageUrl"
        :alt="name"
        @load="hideLoading"
      />
    </div>
    <section class="cart-pizza-item__pizza-card">
      <h3 class="cart-pizza-item__title">{{ name }}</h3>
      <span class="cart-pizza-item__cost">{{ totalCost }}</span>
      <button @click="userStore.removeFromCart(id)">remove</button>
    </section>
  </div>
</template>

<style lang="sass" scoped>

.cart-pizza-item
    display: flex
    flex-direction: column
.cart-pizza-item__loading-wrapper
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 15rem
.cart-pizza-item__image-wrapper
    display: flex
    justify-content: center
    align-items: center
    max-width: 10rem
    min-width: 5rem
    overflow: hidden
    align-self: center
.cart-pizza-item__pizza-image
    width: 100%
    height: 100%
    object-fit: contain
.cart-pizza-item__pizza-card
    padding: 0 2rem 0 2rem
.cart-pizza-item__title
.cart-pizza-item__cost
    font-size: 1.5rem
</style>
