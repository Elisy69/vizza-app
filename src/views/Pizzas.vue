<script lang="ts" setup>
import CustomPizzaMaker from "@components/pizzas_list/CustomPizzaMaker.vue";
import PizzaList from "@components/pizzas_list/PizzaList.vue";
import BaseModal from "@components/BaseModal.vue";
import SignInForm from "@components/authentication/SignInForm.vue";
import LoginForm from "@components/authentication/LoginForm.vue";
import { useModal } from "@composables/useModal";
import { ref } from "vue";

const { isOpen } = useModal();
const isLogin = ref(true);

function handleFormSwitch() {
  console.log(isLogin.value);
  isLogin.value = !isLogin.value;
}
</script>

<template>
  <div class="pizzasPage">
    <CustomPizzaMaker />
    <PizzaList />
    <BaseModal v-show="isOpen.login">
      <template #modalTitle>Sign up or login</template>
      <template #modalContent>
        <LoginForm v-if="isLogin" />
        <SignInForm v-else />
        <button @click="handleFormSwitch">
          {{ isLogin ? "Sign in" : "Back to login" }}
        </button>
      </template>
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
