<script lang="ts" setup>
import { supabase } from "@supabaseClient/supabaseClient";
import { reactive, watchEffect } from "vue";

const _credentials = reactive({
  email: "",
  password: "",
});

const signUp = async () => {
  console.log("hello");

  let { data, error } = await supabase.auth.signUp({
    email: "strashevsky.elisey@gmail.com",
    password: "Ronaldinho10",
  });
  console.log(error);
};
</script>

<template>
  <form>
    <label for="email">Your email:</label>
    <input v-model="_credentials.email" type="email" name="email" />
    <label for="current-password">Yor password</label>
    <input
      v-model="_credentials.password"
      type="current-password"
      name="current-password"
    />
    <button type="button" @click="signUp">Submit</button>
  </form>
</template>

<style lang="sass" scoped></style>
../../lib/supabase/supabaseClient
