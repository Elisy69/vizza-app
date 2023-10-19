<script lang="ts" setup>
import PizzaModel from "./PizzaModel.vue";
</script>

<template>
  <div class="customPizzaWrapper">
    <PizzaModel />
    <section class="hintsSection">
      <h1 class="headline">Make your own pizza!</h1>
      <div class="hintsWrapper">
        <div class="hint">Click on a pizza slice to select a topping</div>
        <div class="hint">
          Click prepare and our chefs will start cooking your pizza right away
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="sass" scoped>
@use '@abstracts/mixins.sass'

.customPizzaWrapper
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  padding: 1rem
  gap: 1rem


  @include mixins.mq (sm)
    flex-direction: row
.hintsSection
  flex: 1
  display: flex
  flex-direction: column
  justify-content: start
  gap: 2rem
.headline
  margin: 0
  text-align: center
.hintsWrapper
  display: flex
  text-align: center
  gap: 1rem
.hint
  flex: 1
  border: 1px solid black
  padding: 0.5rem
  border-radius: 1rem
</style>
