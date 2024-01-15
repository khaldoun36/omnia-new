// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Global CSS import
  css: ["~/assets/css/design-tokens.css"],

  // Nuxt specific modules
  modules: ["@nuxt/image"],
});
