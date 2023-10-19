<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { useModal } from "@composables/useModal.ts";

const props = defineProps<{
  name: string;
}>();

const { openModal } = useModal();

function getRouteName(buttonName: string) {
  switch (buttonName) {
    case "Pizzas 🍕":
      return "Pizzas";
    case "Cart 🛒":
      return "Cart";
    case "Login":
      return "Pizzas";
    case "Account":
      return "Account";
    default:
      return buttonName;
  }
}
</script>

<template>
  <RouterLink
    class="routerLink"
    :to="{ name: `${getRouteName(name)}` }"
    @click="name === 'Login' && openModal()"
  >
    <span>{{ name }}</span>
  </RouterLink>
</template>

<style lang="sass" scoped>


.routerLink
  all: unset
  flex: 1
  border: none
  border-right: 1px solid #e8e8e8
  background: none
  cursor: pointer
  display: flex
  justify-content: center
  align-items: center
  &:hover
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset
</style>
