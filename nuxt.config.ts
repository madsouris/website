// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-icon',
        'nuxt-windicss',
        '@nuxt/content',
        [
            '@nuxtjs/robots',
            {
                UserAgent: '*',
                Disallow: '',
            },
        ],
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            link: [
                {
                    rel: 'icon',
                    type: 'image/jpeg',
                    href: '/img/favicon.jpg',
                },
            ],
            meta: [
                {
                    name: 'theme-color',
                    content: '#f97316',
                    media: '(prefers-color-scheme: dark)',
                },
                {
                    name: 'theme-color',
                    content: '#fed7aa',
                    media: '(prefers-color-scheme: light)',
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
            plugins: [
                require('windicss/plugin/aspect-ratio'),
                require('windicss/plugin/typography')({
                    dark: true,
                }),
            ],
        },
    },
    typescript: {},
    webpack: {},
})
