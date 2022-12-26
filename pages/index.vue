<template>
    <section class="container mx-auto">
        <div class="flex flex-col md:flex-row gap-2 sm:flex-wrap md:flex-nowrap">
            <div class="px-2 pb-2 pt-16 border border-gray-200 dark:border-gray-900 sm:basis-full md:basis-1/2">
                <h1 class="text-7xl text-black dark:text-white tracking-tight font-bold font-sans mb-2">
                    welcome.
                </h1>
                <p class="font-sans text-black dark:text-white tracking-tight mb-4">
                    I am a product and graphic designer currently working in Phnom Penh, Cambodia.
                    Clear big bold designs satisfied me.
                </p>
                <NuxtLink to="/about"
                    class="text-white dark:text-black tracking-tight font-sans no-underline py-3 px-5 bg-black dark:bg-white inline-block hover:bg-orange-500 transition transition-all">
                    about
                    me.</NuxtLink>
            </div>
            <div
                class="p-2 border border-gray-200 dark:border-gray-900 sm:basis-full md:basis-1/2 flex flex-col justify-end">

                <ul class="p-0 m-0 list-none">
                    <li class="mt-2">
                        <NuxtLink to="/projects"
                            class="font-sans text-black dark:text-white no-underline tracking-tight hover:text-orange-500 hover:underline">
                            projects.
                        </NuxtLink>
                    </li>
                    <li class="mt-2">
                        <NuxtLink to="/about"
                            class="font-sans text-black dark:text-white no-underline tracking-tight hover:text-orange-500 hover:underline">
                            about me.</NuxtLink>
                    </li>
                    <li class="mt-2">
                        <NuxtLink to="/blog"
                            class="font-sans text-black dark:text-white no-underline tracking-tight hover:text-orange-500 hover:underline">
                            blog.</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="container mx-auto mb-2">
        <div
            class="border border-gray-200 dark:border-gray-900 mt-2 p-2 flex flex-col md:flex-row gap-2 items-start md:items-end">
            <div class="basis-full md:basis-1/3">
                <h2 class="font-sans tracking-tight mb-2 text-3xl font-bold">
                    projects overview
                </h2>
                <a href="#"
                    class="font-sans tracking-tight text-black dark:text-white no-underline hover:underline hover:text-orange-500 transition-all">
                    all projects
                    <Icon name="material-symbols:arrow-right-alt-rounded" size="1.5rem"></Icon>
                </a>
            </div>
            <div class="basis-full md:basis-2/3">
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="div in 4" :key="div" class="h-full aspect-square">
                        <img src="http://placekitten.com/600/800" alt="Kitty"
                            class="w-full h-full object-cover object-center filter grayscale-0 lg:grayscale hover:grayscale-0">
                    </div>
                </div>

            </div>
        </div>
    </section>

    <CallToAction />

</template>