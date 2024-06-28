import { useUserStore } from "@store/user";
import { storeToRefs } from "pinia";

export function useAuth() {
  let userStore = useUserStore();
  let { user, setUser } = userStore;

  const { isLoggedIn } = storeToRefs(userStore);

  const validateEmail = (str: string) => {
    if (!str) return false;
    const pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(str);
  };

  return {
    isLoggedIn,
    setUser,
    user,
    validateEmail,
  };
}
