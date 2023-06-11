<template>
    <div class="flex flex-col md:flex-row gap-2 mb-2 items-start">
        <div class="basis-full">
            <div class="flex flex-col gap-2 border border-gray-200 dark:border-gray-900 p2 text-center">
                <h1 class="text-7xl text-black dark:text-white tracking-tight font-bold font-sans">
                    gallery.
                </h1>
                <p>
                    here are some of my works I've done over the years. <br />
                    a lot of them I can't really show because they are the
                    properties of my previous companies.
                </p>
                <h2 class="text-5xl text-black dark:text-white tracking-tight font-bold font-sans mt-8">
                    user interface designs
                </h2>
                <p class="mb-2">click to enlarge</p>
                <div class="w-full p-2 flex flex-row flex-wrap justify-center spotlight-group">
                    <a v-for="i in 33" :key="i" :href="'https://ik.imagekit.io/madsouris/vannrith/ui/' +
                        i +
                        '.jpg?tr=w-1200'
                        " class="spotlight basis-1/3 md:basis-1/6 lg:basis-1/9 hover:opacity-90">
                        <nuxt-img provider="imagekit" :src="'/vannrith/ui/' + i + '.jpg'" width="320" height="320" />
                    </a>
                </div>
                <h2 class="text-5xl text-black dark:text-white tracking-tight font-bold font-sans mt-8">
                    graphic designs
                </h2>
                <p class="mb-2">click to enlarge</p>
                <div class="w-full p-2 flex flex-row flex-wrap justify-center spotlight-group">
                    <a v-for="i in 19" :key="i" :href="'https://ik.imagekit.io/madsouris/vannrith/graphic/' +
                        i +
                        '.jpg?tr=w-1200'
                        " class="spotlight basis-1/3 md:basis-1/6 lg:basis-1/9 hover:opacity-90">
                        <nuxt-img provider="imagekit" :src="'/vannrith/graphic/' + i + '.jpg'" width="320" height="320" />
                    </a>
                </div>
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
    title: 'Gallery | Souris | Product Designer',
    meta: [
        {
            property: 'twitter:title',
            content: 'Gallery | Souris | Product Designer',
        },

        {
            property: 'og:title',
            content: 'Gallery | Souris | Product Designer',
        },
        {
            name: 'description',
            content:
                'Some of my previous works in gallery format. While I did a lot more since 2015, majority of them belong to my previous companies. With years of experience in graphic design, digital illustration, branding, and UX/UI design, my designs are tailored to match the unique needs of each client.',
        },

        {
            property: 'og:description',
            content:
                'Some of my previous works in gallery format. While I did a lot more since 2015, majority of them belong to my previous companies. With years of experience in graphic design, digital illustration, branding, and UX/UI design, my designs are tailored to match the unique needs of each client.',
        },
        {
            property: 'twitter:description',
            content:
                'Some of my previous works in gallery format. While I did a lot more since 2015, majority of them belong to my previous companies. With years of experience in graphic design, digital illustration, branding, and UX/UI design, my designs are tailored to match the unique needs of each client.',
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            property: 'og:url',
            content: 'https://vannrith.com/gallery',
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
            content: 'https://vannrith.com/gallery',
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
