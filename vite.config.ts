import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@pages": "/src/views",
      "@abstracts": "/src/style/abstracts",
      "@composables": "/src/composables",
      "@supabaseClient": "/src/lib/supabase",
      "@store": "/src/store",
    },
  },
});
