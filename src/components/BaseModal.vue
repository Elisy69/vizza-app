<script lang="ts" setup>
import { useModal } from "@composables/useModal";
const { closeModal } = useModal();
</script>

<template>
  <Transition name="nested">
    <div class="overlay" @click.self="closeModal">
      <div class="modalWindow">
        <button class="closeButton" @click="closeModal">X</button>
        <h1 class="modalTitle"><slot name="modalTitle"></slot></h1>
        <div class="modalContent"><slot name="modalContent"></slot></div>
      </div>
    </div>
  </Transition>
</template>

<style lang="sass" scoped>

.overlay
    display: flex
    position: fixed
    width: 100%
    height: 100%
    left: 0
    top: 0
    z-index: 10
    background-color: rgba(0, 0, 0, 0.8)
    justify-content: center
    align-items: center
.modalWindow
    position: relative
    z-index: 11
    width: 25rem
    height: 30rem
    background-color: white
    display: flex
    flex-direction: column
    padding: 1rem

.modalTitle
    text-align: center
    margin: 0
.closeButton
    position: absolute
    left: 22.6rem
    top: 0.5rem
    border-radius: 0.9rem
    cursor: pointer



.nested-enter-active
    transition: opacity 0.5s ease
.nested-leave-active
   transition: opacity 0.5s ease
   transition-delay: 0.25s
.nested-enter-from, .nested-leave-to
  opacity: 0
.nested-enter-active .modalWindow, .nested-leave-active .modalWindow
  transition: all 0.3s ease-in-out

.nested-enter-active .modalWindow
  transition-delay: 0.05s

.nested-enter-from .modalWindow, .nested-leave-to .modalWindow
  transform: translateX(200px)
  opacity: 0.001
</style>
