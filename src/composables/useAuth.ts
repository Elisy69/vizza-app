import { storeToRefs } from "pinia";
import { useUserStore } from "/Users/strashevskyelisey/Desktop/coding/Projects/vizza/src/store/user.ts";

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
