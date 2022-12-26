// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['nuxt-icon', 'nuxt-windicss'],
    app: {
        head: {
            title: 'Souris | Product Designer in Phnom Penh',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                {
                    name: 'theme-color',
                    content: '#f97316',
                },
                {
                    name: 'color-scheme',
                    content: 'dark light',
                },
            ],
            bodyAttrs: {
                class: 'bg-yellow-50 dark dark:bg-black',
            },
        },
    },
    windicss: {
        config: {
            darkMode: 'media',
            plugins: [require('windicss/plugin/aspect-ratio')],
        },
    },
})
