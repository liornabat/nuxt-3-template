import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css'],
    build: {
        transpile: ['primevue']
    },
    modules: [
        '@vueuse/nuxt',
        '@pinia/nuxt'],
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
})
