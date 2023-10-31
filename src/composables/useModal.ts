import { reactive } from "vue";

const isOpen = reactive({ login: false });

export function useModal() {
  const closeModal = () => {
    Object.keys(isOpen).forEach((key) => {
      isOpen[key] = false;
    });
  };
  const openModal = (type) => {
    isOpen[type] = true;
  };
  return {
    isOpen,
    closeModal,
    openModal,
  };
}
