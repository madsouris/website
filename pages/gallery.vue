<template>
    <div class="flex flex-col md:flex-row gap-2 mb-2 items-start">
        <div
            class="border border-gray-200 dark:border-gray-900 p-2 basis-full md:basis-1/3 lg:basis-1/4 md:sticky top-[112px]">
            <img
                src="/img/me600.jpg"
                loading="lazy"
                alt="my photo"
                class="w-full" />
            <div class="flex flex-col gap-2 mt-2">
                <h1
                    class="text-2xl tracking-tight text-black dark:text-white font-bold font-sans mb-2">
                    Vannrith (វណ្ណរិទ្ធ) AKA. Souris
                </h1>
            </div>
        </div>
        <div class="basis-full md:basis-2/3 lg:basis-3/4">
            <div
                class="flex flex-col gap-2 border border-gray-200 dark:border-gray-900 p-2">
                <h1
                    class="text-7xl text-black dark:text-white tracking-tight font-bold font-sans">
                    Gallery
                </h1>
                <p>
                    My name is Vannrith Va, mostly known as Souris. I am a
                    product designer and front-end developer working from Phnom
                    Penh, Cambodia.
                </p>
            </div>
            <div
                class="flex flex-col gap-2 border border-gray-200 dark:border-gray-900 p-2 mt-2">
                <h1
                    class="text-2xl tracking-tight text-black dark:text-white font-bold font-sans">
                    about this website.
                </h1>
                <p>
                    This website was built with Nuxt 3, and some other goodies
                    like Windi CSS and Netlify.
                </p>
            </div>
        </div>
    </div>
    <CallToAction />
</template>

<style scoped>
.embed iframe html body {
    background: black !important;
}
</style>

<script setup lang="ts">
useHead({
    title: 'About | Souris | Product Designer',
    meta: [
        {
            property: 'twitter:title',
            content: 'About | Souris | Product Designer',
        },

        {
            property: 'og:title',
            content: 'About | Souris | Product Designer',
        },
        {
            name: 'description',
            content:
                'I do love minimal design. Being a Cambodian, surrounded by busy-designs, inspired me to make something different, design to solve issue instead of making it look a certain way.',
        },

        {
            property: 'og:description',
            content:
                'I do love minimal design. Being a Cambodian, surrounded by busy-designs, inspired me to make something different, design to solve issue instead of making it look a certain way.',
        },
        {
            property: 'twitter:description',
            content:
                'I do love minimal design. Being a Cambodian, surrounded by busy-designs, inspired me to make something different, design to solve issue instead of making it look a certain way.',
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            property: 'og:url',
            content: 'https://vannrith.com/about',
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
            content: 'https://vannrith.com/about',
        },
        {
            property: 'twitter:image',
            content: '/img/feature.jpg',
        },
    ],
})
</script>

<script lang="ts">
export default defineComponent({
    data() {
        return {}
    },
})
</script>
