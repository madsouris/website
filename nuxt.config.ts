// https://nuxt.com/docs/api/configuration/nuxt-config
declare var require: any

export default defineNuxtConfig({
    modules: [
        'nuxt-icon',
        '@nuxt/content',
        '@nuxt/image-edge',
        'nuxt-gtag',
        [
            '@nuxtjs/robots',
            {
                UserAgent: '*',
                Disallow: '',
            },
        ],
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
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
                {
                    name: 'keywords',
                    content:
                        'Product designer,Cambodia,Remote designer,Freelance design,Graphic design,Digital illustration,Creative solutions,Branding,Advertising,User experience design,User interface design,Logo design,Web design,Social media graphics,Product sketches',
                },
                {
                    name: 'author',
                    content: 'Souris',
                },
            ],
            bodyAttrs: {
                class: 'bg-yellow-50 dark dark:bg-black',
            },
        },
    },
    typescript: {},
    webpack: {},
    image: {
        imagekit: {
            baseURL: 'https://ik.imagekit.io/madsouris',
        },
    },
    gtag: {
        id: 'G-V6V0HZZKHK',
    },
})
