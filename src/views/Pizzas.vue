<script lang="ts" setup>
import CustomPizzaMaker from "@components/pizzas_list/CustomPizzaMaker.vue";
import PizzaList from "@components/pizzas_list/PizzaList.vue";
import BaseModal from "@components/BaseModal.vue";
</script>

<template>
  <div class="pizzasPage">
    <CustomPizzaMaker />
    <PizzaList />
    <BaseModal>
      <template #modalTitle> Sign up or login </template>
      <template #modalContent> My content </template>
    </BaseModal>
  </div>
</template>

<style lang="sass" scoped>
.pizzasPage
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
</style>
