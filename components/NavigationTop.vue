<template>
    <header class="container mx-auto">
        <section class="flex flex-row w-full justify-between items-center border border-gray-200 mb-2">
            <p class="text-sm font-sans tracking-tight px-2">
                Welcome
            </p>
            <ul class="list-none flex flex-row items-center m-0 p-0 gap-2 px-2">
                <li v-for="link in links">
                    <a :href="link.url" target="_blank"
                        class="text-black hover:text-orange-500 transition transition-all">
                        <Icon :name="link.icon" size="1rem" />
                    </a>
                </li>
            </ul>
        </section>

        <section class="flex flex-row w-full justify-between items-center border border-gray-200 mb-2">
            <a href="/" class="p-2 border-r border-gray-200">
                <div class="w-10 h-10 bg-orange-500 hover:bg-black"></div>
            </a>
            <div class="p-2 border-l border-gray-200">
                <button
                    class="text-2xl text-black hover:text-orange-500 border-0 bg-transparent outline-0 cursor-pointer p-0"
                    @click="this.menu = !this.menu">
                    <Icon name="ic:round-menu" size="2rem" />
                </button>
            </div>
        </section>

        <section
            class="w-full h-screen fixed top-0 left-0 bg-yellow-50 op-100 transition transition-opacity duration-500 overflow-none"
            v-if="menu">
            <div class="container mx-auto text-center lg:text-right">

                <ul class="w-full list-none px-2 py-10 m-0 flex flex-col gap-10 items-center lg:items-end ">
                    <li v-for="url in urls">
                        <NuxtLink :to="url.path" @click="this.menu = !this.menu"
                            class="text-black text-7xl hover:text-orange-500 no-underline hover:underline font-sans font-bold tracking-tight transition transition-all">
                            {{ url.title }}.
                        </NuxtLink>
                    </li>
                </ul>

                <button @click="this.menu = !this.menu"
                    class="text-2xl text-black hover:text-orange-500 border-0 bg-transparent outline-0 cursor-pointer p-0 mt-10">
                    <Icon name="mdi:close-thick" size="3rem" />
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
                    path: '/'
                },
                projects: {
                    title: 'projects',
                    path: '/projects'
                },
                about: {
                    title: 'about',
                    path: '/about'
                },
                blog: {
                    title: 'blog',
                    path: '/blog'
                }
            },
            links: {
                dribbble: {
                    url: 'https://dribbble.com/madsouris',
                    icon: 'bxl:dribbble'
                },
                linkedin: {
                    url: 'https://linkedin.com/in/madsouris',
                    icon: 'ri:linkedin-fill'
                },
                github: {
                    url: 'https://github.com/madsouris',
                    icon: 'mdi:github'
                },
                mail: {
                    url: 'mailto:me@vannrith.com',
                    icon: 'material-symbols:mail-outline-rounded'
                }
            }
        }
    }
})
</script>