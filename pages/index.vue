<template>
    <section class="container mx-auto">
        <div class="flex flex-col md:flex-row gap-2 sm:flex-wrap md:flex-nowrap">
            <div class="px-2 pb-2 pt-16 border border-gray-200 dark:border-gray-900 sm:basis-full md:basis-1/2">
                <h1 class="text-7xl text-black dark:text-white tracking-tight font-bold font-sans mb-2">
                    welcome.
                </h1>
                <p class="font-sans text-black dark:text-white tracking-tight mb-4">
                    I am a product and graphic designer currently working in
                    Phnom Penh, Cambodia. Clear big bold designs satisfied me.
                </p>
                <NuxtLink to="/about"
                    class="text-white dark:text-black font-bold tracking-tight font-sans no-underline py-3 px-5 bg-black dark:bg-white inline-block hover:bg-orange-500 transition-all">
                    about me.</NuxtLink>
            </div>
            <div
                class="p-2 border border-gray-200 dark:border-gray-900 sm:basis-full md:basis-1/2 flex flex-col justify-end">
                <ul class="p-0 m-0 list-none">
                    <li class="mt-2">
                        <NuxtLink to="/projects"
                            class="font-sans font-bold text-black dark:text-white no-underline tracking-tight hover:text-orange-500 hover:underline">
                            projects.
                        </NuxtLink>
                    </li>
                    <li class="mt-2">
                        <NuxtLink to="/gallery"
                            class="font-sans font-bold text-black dark:text-white no-underline tracking-tight hover:text-orange-500 hover:underline">
                            gallery.
                        </NuxtLink>
                    </li>
                    <li class="mt-2">
                        <NuxtLink to="/about"
                            class="font-sans font-bold text-black dark:text-white no-underline tracking-tight hover:text-orange-500 hover:underline">
                            about me.</NuxtLink>
                    </li>
                    <li class="mt-2">
                        <NuxtLink to="/blog"
                            class="font-sans font-bold text-black dark:text-white no-underline tracking-tight hover:text-orange-500 hover:underline">
                            blog.</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="container mx-auto mb-2">
        <div
            class="border border-gray-200 dark:border-gray-900 mt-2 p-2 flex flex-col md:flex-row gap-2 items-start md:items-end">
            <div class="basis-full md:basis-1/2">
                <h2 class="font-sans tracking-tight text-3xl font-bold">
                    projects overview
                </h2>
                <p class="mb-2">click to enlarge</p>
                <NuxtLink to="/projects"
                    class="font-sans tracking-tight no-underline hover:underline text-orange-500 transition-all">
                    all projects
                    <Icon name="material-symbols:arrow-right-alt-rounded" size="18px"></Icon>
                </NuxtLink>
            </div>
            <div class="basis-full md:basis-1/2 p-0 m-0">
                <div class="flex flex-wrap">
                    <a href="https://ik.imagekit.io/madsouris/vannrith/ui/2.jpg?tr=w-1200"
                        class="spotlight basis-1/2 cursor-pointer hover:opacity-90">
                        <nuxt-img provider="imagekit" src="/vannrith/ui/2.jpg" width="420" height="420" class="w-full" />
                    </a>
                    <a href="https://ik.imagekit.io/madsouris/vannrith/ui/4.jpg?tr=w-1200"
                        class="spotlight basis-1/2 cursor-pointer hover:opacity-90">
                        <nuxt-img provider="imagekit" src="/vannrith/ui/4.jpg" width="420" height="420" class="w-full" />
                    </a>
                    <a href="https://ik.imagekit.io/madsouris/vannrith/graphic/4.jpg?tr=w-1200"
                        class="spotlight basis-1/2 cursor-pointer hover:opacity-90">
                        <nuxt-img provider="imagekit" src="/vannrith/graphic/4.jpg" width="420" height="420"
                            class="w-full" />
                    </a>
                    <a href="https://ik.imagekit.io/madsouris/vannrith/graphic/7.jpg?tr=w-1200"
                        class="spotlight basis-1/2 cursor-pointer hover:opacity-90">
                        <nuxt-img provider="imagekit" src="/vannrith/graphic/7.jpg" width="420" height="420"
                            class="w-full" />
                    </a>
                </div>
            </div>
        </div>
    </section>

    <CallToAction />
</template>

<script setup lang="ts">
useHead({
    title: 'Souris | Product Designer',
    meta: [
        {
            property: 'twitter:title',
            content: 'Souris | Product Designer in Phnom Penh',
        },

        {
            property: 'og:title',
            content: 'Souris | Product Designer in Phnom Penh',
        },
        {
            name: 'description',
            content: 'Souris, a product designer based in Cambodia, offers design services to businesses and individuals looking for creative solutions. With years of experience in graphic design, digital illustration, branding, and UX/UI design, my designs are tailored to match the unique needs of each client.',
        },

        {
            property: 'og:description',
            content: 'Souris, a product designer based in Cambodia, offers design services to businesses and individuals looking for creative solutions. With years of experience in graphic design, digital illustration, branding, and UX/UI design, my designs are tailored to match the unique needs of each client.',
        },
        {
            property: 'twitter:description',
            content: 'Souris, a product designer based in Cambodia, offers design services to businesses and individuals looking for creative solutions. With years of experience in graphic design, digital illustration, branding, and UX/UI design, my designs are tailored to match the unique needs of each client.',
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
            property: 'twitter:image',
            content: '/img/feature.jpg',
        },
    ],
})
</script>
