<script lang="ts" setup>
import { reactive, watchEffect } from "vue";
import { supabase } from "@supabaseClient/supabaseClient";

const _credentials = reactive({
  email: "",
  password: "",
});

const signUp = async () => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: _credentials.email,
    password: _credentials.password,
  });
  console.log(data);
};
</script>

<template>
  <form>
    <form>
      <label for="email">Your email:</label>
      <input v-model="_credentials.email" type="email" name="email" />
      <label for="current-password">Yor password</label>
      <input
        v-model="_credentials.password"
        type="current-password"
        name="current-password"
      />
      <button @click="signUp" type="button">Submit</button>
    </form>
  </form>
</template>

<style lang="sass" scoped></style>
../../lib/supabase/supabaseClient
