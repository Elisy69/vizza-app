<script lang="ts" setup>
import { computed, ref, watchEffect } from "vue";
import NavbarButton from "./NavbarButton.vue";
import { useAuth } from "@composables/useAuth";

const { isLoggedIn } = useAuth();

const loginButtonName = computed(() => {
  return isLoggedIn.value ? "Account" : "Login";
});

const BUTTONS_NAMES = ref([
  "Pizzas 🍕",
  "About us",
  "Delivery",
  "Cart 🛒",
  loginButtonName.value,
]);

watchEffect(() => {
  BUTTONS_NAMES.value[BUTTONS_NAMES.value.length - 1] = loginButtonName.value;
});
</script>

<template>
  <nav class="navbar">
    <NavbarButton
      v-for="(button, index) in BUTTONS_NAMES"
      :key="index"
      :name="button"
    />
  </nav>
</template>

<style lang="sass" scoped>
@use '@abstracts/mixins.sass'
.navbar
    position: fixed
    width: 90%
    height: 3.5rem
    border-radius: 2rem
    margin-top: 0.3rem
    background-color: white
    opacity: 0.9
    display: flex
    @include mixins.custom-box-shadow
    @include mixins.mq (xs)
    @include mixins.mq (sm)

.routerLink:last-child
    border-right: none
    border-radius: 0 2rem 2rem 0
.routerLink:first-child
    border-radius: 2rem 0 0 2rem
</style>
