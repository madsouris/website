<template>
    <div class="flex flex-col md:flex-row gap-2 mb-2 items-start">
        <div class="basis-full">
            <div class="flex flex-col gap-2 border border-gray-200 dark:border-gray-900 px-2 py-12 text-center">
                <h1 class="text-7xl text-black dark:text-white tracking-tight font-bold font-sans">
                    Gallery
                </h1>
                <p>
                    Here are some of my works I've done over the years. <br />
                    A lot of them I can't really show because they are the
                    properties of my previous companies.
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
