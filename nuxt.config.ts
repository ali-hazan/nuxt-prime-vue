// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue", "@pinia/nuxt"],
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      exclude: ["Editor", "Chart"],
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: ["primevue/resources/themes/lara-dark-indigo/theme.css"],
});
