<script lang="ts" setup>
import { supabase } from "@supabaseClient/supabaseClient";
import { useRouter } from "vue-router";

const router = useRouter();

const logOut = async () => {
  let {} = await supabase.auth.signOut();
  router.push("/");
};
</script>

<template>
  <div>Your personal account</div>
  <button @click="logOut">Logout</button>
</template>

<style lang="sass" scoped></style>
