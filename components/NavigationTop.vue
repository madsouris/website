<template>
    <header class="sticky top-0 left-0 w-full bg-amber-50 dark:bg-black z-40">
        <section
            class="flex flex-row w-full justify-between items-center border border-gray-200 dark:border-gray-900 my-2">
            <p
                class="text-sm text-black dark:text-white font-sans tracking-tight p-2">
                Welcome
            </p>
            <ul class="list-none flex flex-row items-center m-0 p-0 gap-2 px-2">
                <li v-for="link in links">
                    <a
                        :href="link.url"
                        target="_blank"
                        aria-label="link.name"
                        class="text-black dark:text-white hover:text-orange-500 transition transition-all">
                        <Icon :name="link.icon" size="16px" />
                    </a>
                </li>
            </ul>
        </section>

        <section
            class="flex flex-row w-full justify-between items-center border border-gray-200 dark:border-gray-900 mb-2">
            <a
                href="/"
                class="p-2 border-r border-gray-200 dark:border-gray-900"
                aria-label="logo">
                <div
                    class="w-10 h-10 bg-orange-500 hover:bg-black dark:hover:bg-orange-700"></div>
            </a>
            <div class="p-2 border-l border-gray-200 dark:border-gray-900">
                <button
                    type="button"
                    aria-label="menu"
                    class="text-2xl text-black dark:text-white hover:text-orange-500 border-0 bg-transparent outline-0 cursor-pointer p-0"
                    @click="this.menu = !this.menu">
                    <Icon name="ic:round-menu" size="32px" />
                </button>
            </div>
        </section>

        <section
            class="w-full h-screen fixed top-0 left-0 bg-yellow-50 dark:bg-black z-50 flex justify-center items-center"
            v-if="menu">
            <div class="container mx-auto text-center lg:text-right">
                <ul
                    class="w-full list-none px-2 py-10 m-0 flex flex-col gap-10 items-center lg:items-end">
                    <li v-for="url in urls">
                        <NuxtLink
                            :to="url.path"
                            @click="this.menu = !this.menu"
                            class="text-black dark:text-white text-5xl md:text-7xl hover:text-orange-500 no-underline hover:underline font-sans font-bold tracking-tight transition transition-all">
                            {{ url.title }}.
                        </NuxtLink>
                    </li>
                </ul>

                <button
                    @click="this.menu = !this.menu"
                    class="text-2xl text-orange-500 border-0 bg-transparent outline-0 cursor-pointer p-0 mt-6 md:mt-10">
                    <Icon name="mdi:close-thick" size="48px" />
                </button>
            </div>
        </section>
    </header>
</template>

<script>
export default defineComponent({
    data() {
        return {
            menu: false,
            urls: {
                home: {
                    title: 'home',
                    path: '/',
                },
                projects: {
                    title: 'projects',
                    path: '/projects',
                },
                about: {
                    title: 'about',
                    path: '/about',
                },
                blog: {
                    title: 'blog',
                    path: '/blog',
                },
                gallery: {
                    title: 'gallery',
                    path: '/gallery',
                },
            },
            links: {
                dribbble: {
                    url: 'https://dribbble.com/madsouris',
                    icon: 'bxl:dribbble',
                    name: 'dribbble',
                },
                linkedin: {
                    url: 'https://linkedin.com/in/madsouris',
                    icon: 'ri:linkedin-fill',
                    name: 'linkedin',
                },
                github: {
                    url: 'https://github.com/madsouris',
                    icon: 'mdi:github',
                    name: 'github',
                },
                mail: {
                    url: 'mailto:me@vannrith.com',
                    icon: 'material-symbols:mail-outline-rounded',
                    name: 'mail',
                },
            },
        }
    },
})
</script>
