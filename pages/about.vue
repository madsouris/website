<template>
    <div class="flex flex-col md:flex-row gap-2 mb-2 items-start">
        <div
            class="border border-gray-200 dark:border-gray-900 p-2 basis-full md:basis-1/3 lg:basis-1/4 md:sticky top-[112px]">
            <nuxt-img src="/me600.jpg" loading="lazy" alt="my photo" class="w-full" />
            <div class="flex flex-col gap-2 mt-2">
                <h1 class="text-2xl tracking-tight text-black dark:text-white font-bold font-sans mb-2">
                    Vannrith (វណ្ណរិទ្ធ) AKA. Souris
                </h1>
                <ul>
                    <li v-for="link in links" :key="link.url">
                        <a :href="link.url" target="_blank"
                            class="inline-flex gap-2 items-center hover:text-orange-500">
                            <Icon :name="link.icon" size="18px" />
                            {{ link.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="basis-full md:basis-2/3 lg:basis-3/4">
            <div class="flex flex-col gap-2 border border-gray-200 dark:border-gray-900 p-2">
                <h1 class="text-7xl text-black dark:text-white tracking-tight font-bold font-sans">
                    about me.
                </h1>
                <p>
                    My name is Vannrith Va, mostly known as Souris. I am a
                    product designer and front-end developer working from Phnom
                    Penh, Cambodia.
                </p>
                <p>
                    Apart from designing and some coding, I also do a variety of
                    activities like sport, draw, photograph, game and enjoy some
                    movie’s methologies.
                </p>
                <p>
                    My coding career started in 2016, doing some PHP and
                    WordPress, and later manage Shopify. During that time I had
                    chance to explore other related fields like magazine design
                    and later on, product design.
                </p>
                <p>
                    2018 is where my product design career started to take
                    shape. I spent a lot of time with companies designing mobile
                    apps, and website. You can see some of that in projects
                    section and in my Dribbble profile.
                </p>
                <p>
                    I do love minimal design. Being a Cambodian, surrounded by
                    busy-designs, inspired me to make something different,
                    design to solve issue instead of making it look a certain
                    way.
                </p>
                <p>
                    Lastly, I personally also promoting Free and Open Source
                    Software, like Linux distributions, design tools, and other
                    applications. Hopefully one day I can make something good to
                    impact the change.
                </p>
            </div>
            <div class="flex flex-col gap-2 border border-gray-200 dark:border-gray-900 p-2 mt-2">
                <h1 class="text-2xl tracking-tight text-black dark:text-white font-bold font-sans">
                    programming skills.
                </h1>
                <p>
                    It all started with PHP, and WordPress, and later I dive
                    deeper into CSS and preprocessing (yes people always argue
                    that CSS is not a programming language all the time, I
                    understand). Since the world we’re living right now focus
                    heavily on Javascript to build everything from website to
                    mobile app to desktop app, I also am playing and working
                    with Javascript and other frameworks like Vue, Nuxt and
                    Ionic. But in general, my main focus is to bring my UI
                    design to life, let the smarter people figure out the
                    architecture and backend part.
                </p>
            </div>
            <div class="flex flex-col gap-2 border border-gray-200 dark:border-gray-900 p-2 mt-2">
                <h1 class="text-2xl tracking-tight text-black dark:text-white font-bold font-sans">
                    design skills.
                </h1>
                <p>
                    It all started with image manipulation, and basic vector
                    drawing. I later found Inkscape and started to learn more
                    about it and other vector base design. While working for
                    company I also had the chance to learn about branding as
                    well. But since I have front-end background, picking up
                    product design is very smooth. After finished my UX cource,
                    I have decided that I only stick with product design
                    professionally, so I only focus on one thing.
                </p>
            </div>
            <div class="flex flex-col gap-2 border border-gray-200 dark:border-gray-900 p-2 mt-2">
                <h1 class="text-2xl tracking-tight text-black dark:text-white font-bold font-sans">
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

<script setup lang="ts">
useHead({
    title: 'About | Souris | Product Designer',
    meta: [
        {
            name: 'description',
            content:
                'I do love minimal design. Being a Cambodian, surrounded by busy-designs, inspired me to make something different, design to solve issue instead of making it look a certain way.',
        },
    ],
})
</script>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            links: {
                ig: {
                    url: 'https://instagram.com/madsouris',
                    name: 'madsouris',
                    icon: 'ph:instagram-logo',
                },
                ig_2: {
                    url: 'https://instagram.com/bymadsouris',
                    name: 'bymadsouris',
                    icon: 'ph:instagram-logo',
                },
                github: {
                    url: 'https://github.com/madsouris',
                    name: 'madsouris',
                    icon: 'mdi:github',
                },
                gitlab: {
                    url: 'https://gitlab.com/madsouris',
                    name: 'madsouris',
                    icon: 'ph:gitlab-logo-bold',
                },
                dribbble: {
                    url: 'https://dribbble.com/madsouris',
                    name: 'madsouris',
                    icon: 'icon-park-outline:dribble',
                },
                link: {
                    url: 'https://linkedin.com/in/madsouris',
                    name: '/in/madsouris',
                    icon: 'mdi:linkedin',
                },
                email: {
                    url: 'mailto:me@vannrith.com',
                    name: 'me@vannrith.com',
                    icon: 'ph:envelope-simple-open-bold',
                },
            },
        }
    },
})
</script>
