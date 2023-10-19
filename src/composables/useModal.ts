import { ref } from "vue";

const isOpen = ref(false);

export function useModal() {
  const closeModal = () => {
    console.log("modal closed");

    isOpen.value = false;
  };
  const openModal = () => {
    console.log("modal opened");

    isOpen.value = true;
  };
  return {
    isOpen,
    closeModal,
    openModal,
  };
}
