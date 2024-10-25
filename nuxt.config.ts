// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss"],
  compatibilityDate: "2024-10-21",
  runtimeConfig: {
    NUXT_RAPIDAPI_KEY: process.env.NUXT_RAPIDAPI_KEY,
    NUXT_RAPIDAPI_DNSLOOKUP: process.env.NUXT_RAPIDAPI_DNSLOOKUP,
  },
});
