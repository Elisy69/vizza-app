import { defineStore } from "pinia";
import { Pizza } from "src/types";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);
  const userCart = ref<Pizza[]>([]);
  const isLoggedIn = computed(() => user.value !== null);
  const setUser = (session: any) => {
    user.value = session;
  };
  const addToCart = (pizza: Pizza) => {
    userCart.value.push(pizza);
  };
  const removeFromCart = (id: number) => {
    userCart.value = userCart.value.filter((pizza) => pizza.id !== id);
  };
  return { user, userCart, isLoggedIn, setUser, addToCart, removeFromCart };
});
