<template>
    <section class="container mx-auto">
        <div class="flex flex-col md:flex-row gap-2 sm:flex-wrap md:flex-nowrap">
            <div class="p-2 border border-gray-200 sm:basis-full md:basis-1/2">
                <h1 class="text-7xl text-black tracking-tight font-bold font-sans mb-2">
                    welcome.
                </h1>
                <p class="font-sans tracking-tight">
                    I am a product and graphic designer currently working in Phnom Penh, Cambodia.
                    Clear big bold designs satisfied me.
                </p>
                <NuxtLink to="/about"
                    class="text-white tracking-tight font-sans no-underline py-3 px-5 bg-black inline-block hover:bg-orange-500 transition transition-all">
                    about
                    me.</NuxtLink>
            </div>
            <div class="p-2 border border-gray-200 sm:basis-full md:basis-1/2 flex flex-col justify-end">

                <ul class="p-0 m-0 list-none">
                    <li class="mt-2">
                        <NuxtLink to="/projects"
                            class="font-sans text-black no-underline tracking-tight hover:text-orange-500 hover:underline">
                            projects.
                        </NuxtLink>
                    </li>
                    <li class="mt-2">
                        <NuxtLink to="/about"
                            class="font-sans text-black no-underline tracking-tight hover:text-orange-500 hover:underline">
                            about me.</NuxtLink>
                    </li>
                    <li class="mt-2">
                        <NuxtLink to="/blog"
                            class="font-sans text-black no-underline tracking-tight hover:text-orange-500 hover:underline">
                            blog.</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>

</template>