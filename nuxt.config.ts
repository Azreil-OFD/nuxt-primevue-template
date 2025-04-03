import Nora from '@primeuix/themes/nora';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxt/content',
    '@primevue/nuxt-module',
    '@vueuse/nuxt',
  ],
  primevue: {
    options: {
      theme: {
        preset: Nora
      }
    }
  }
})