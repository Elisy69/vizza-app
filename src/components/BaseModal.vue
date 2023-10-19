<script lang="ts" setup>
import { useModal } from "@composables/useModal";

const { isOpen } = useModal();
</script>

<template>
  <div class="overlay" :class="isOpen ? 'modalOpened' : 'modalClosed'">
    <div class="modalWindow">
      <h1 class="modalTitle"><slot name="modalTitle"></slot></h1>
      <div class="modalContent"><slot name="modalContent"></slot></div>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.modalClosed
    display: none
.modalOpened
    display: flex
.overlay
    position: fixed
    width: 100%
    height: 100%
    left: 0
    top: 0
    z-index: 10
    background-color: black
    opacity: 0.7
.modalWindow
</style>
