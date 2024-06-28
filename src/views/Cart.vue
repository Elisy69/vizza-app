<script lang="ts" setup>
import { useUserStore } from "@store/user";
import CartPizzaItem from "@components/cart/CartPizzaItem.vue";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const userStore = useUserStore();
let { userCart } = storeToRefs(userStore);

onMounted(() => {
  console.log(userCart);
});
</script>

<template>
  <div class="cart">
    <h1 class="cart__title">... pizzas are in the cart</h1>
    <div class="cart__pizzas-list">
      <CartPizzaItem
        v-for="pizza in userCart"
        :id="pizza.id"
        :imageUrl="pizza.image_url"
        :name="pizza.name"
        :totalCost="pizza.total_cost"
      />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.cart__pizzas-list
  border: black 1px solid
  display: grid
  border: 1px solid grey
  grid-template-rows: repeat(1, 1fr)
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr))
</style>
