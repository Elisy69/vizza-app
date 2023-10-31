<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import { supabase } from "@supabaseClient/supabaseClient";
import PizzaItem from "./PizzaItem.vue";
import { Pizza } from "src/types.ts";

const pizzas: Ref<Pizza[] | null> = ref([]);

async function getPizzas() {
  try {
    let { data: pizzas_list } = await supabase.from("pizzas_list").select();
    pizzas.value = pizzas_list;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getPizzas();
});
</script>

<template>
  <div class="pizzasWrapper">
    <PizzaItem
      v-for="pizza in pizzas"
      :id="pizza.id"
      :ingredients="pizza.ingredients"
      :imageUrl="pizza.image_url"
      :name="pizza.name"
      :totalCost="pizza.total_cost"
    />
  </div>
</template>

<style lang="sass" scoped>
@use '@abstracts/mixins.sass'
.pizzasWrapper
  display: grid
  grid-template-rows: 1fr
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr))
  gap: 2rem
  @include mixins.mq (lg)
    gap: 4rem
</style>
../../lib/supabase/supabaseClient.ts
