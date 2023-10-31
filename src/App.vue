<script setup lang="ts">
import Navbar from "@components/navbar/Navbar.vue";
import Footer from "@components/footer/Footer.vue";
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useAuth } from "@composables/useAuth";
import { supabase } from "@supabaseClient/supabaseClient";

const { setUser, isLoggedIn } = useAuth();

const authStatusListener = () => {
  supabase.auth.onAuthStateChange((_, session) => {
    session ? setUser(session.user) : setUser(null);
    console.log("is user logged in?", isLoggedIn.value);
  });
};

onMounted(() => {
  authStatusListener();
});
</script>

<template>
  <div class="appWrapper">
    <Navbar />
    <main class="mainPage">
      <RouterView />
    </main>
    <Footer></Footer>
  </div>
</template>

<style lang="sass" scoped>
.appWrapper
    width: 100%
    height: 100%
    display: flex
    align-items: center
    flex-direction: column
.mainPage
    margin-top: 6rem
    width: 80%
    min-height: 100vh
    background-color: white
    padding: 1rem
</style>
./lib/supabase/supabaseClient
