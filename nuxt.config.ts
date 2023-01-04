// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-icon',
        'nuxt-windicss',
        '@nuxt/image-edge',
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
            title: 'Souris | Product Designer in Phnom Penh',
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
                {
                    name: 'description',
                    content:
                        'Graphic designer, product designer based in Phnom Penh',
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    property: 'og:url',
                    content: 'https://vannrith.com',
                },
                {
                    property: 'og:title',
                    content: 'Souris | Product Designer in Phnom Penh',
                },
                {
                    property: 'og:description',
                    content:
                        'Graphic designer, product designer based in Phnom Penh',
                },
                {
                    property: 'og:image',
                    content: '/img/feature.jpg',
                },
                {
                    property: 'twitter:card',
                    content: 'summary_large_image',
                },
                {
                    property: 'twitter:url',
                    content: 'https://vannrith.com',
                },
                {
                    property: 'twitter:title',
                    content: 'Souris | Product Designer in Phnom Penh',
                },
                {
                    property: 'twitter:description',
                    content:
                        'Graphic designer, product designer based in Phnom Penh',
                },
                {
                    property: 'twitter:image',
                    content: '/img/feature.jpg',
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
