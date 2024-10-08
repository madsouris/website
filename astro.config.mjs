import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), alpinejs(), icon()],
    image: {
        domains: ['ik.imagekit.io'],
        remotePatterns: [{ protocol: 'https' }],
    },
})
