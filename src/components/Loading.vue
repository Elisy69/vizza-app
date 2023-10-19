<script lang="ts" setup></script>

<template>
  <div class="spinner"></div>
</template>

<style lang="sass" scoped>
.spinner
  width: 50px
  height: 50px
  border: 3px solid #fb5b53
  border-top: 3px solid transparent
  border-radius: 50%
  animation: spin .5s linear 0s infinite

@keyframes spin
  from
    transform: rotate(0)
  to
    transform: rotate(359deg)
</style>
