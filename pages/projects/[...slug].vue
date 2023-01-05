<template>
    <main>
        <div class="border border-gray-200 dark:border-gray-900 p-2 mb-2">
            <h2 class="text-7xl tracking-tight font-bold font-sans text-black dark:text-white m-0">
                projects
            </h2>
        </div>
        <ContentDoc>
            <template v-slot="{ doc }">
                <div class="flex flex-col md:flex-row gap-2 items-start">
                    <div
                        class="md:w-1/3 lg:w-1/4 p-2 border border-gray-200 dark:border-gray-900 md:mb-2 md:sticky top-[112px]">
                        <NuxtLink to="/projects"
                            class="text-orange-500 tracking-tight mb-4 inline-flex gap-2 items-center">
                            <Icon name="bx:arrow-back" size="18px" /> back to
                            projects
                        </NuxtLink>
                        <h1 class="text-4xl tracking-tight font-bold font-sans text-black dark:text-white break-words">
                            {{ doc.title }}
                        </h1>
                        <p class="text-black dark:text-white my-4 leading-tight">
                            {{ doc.description }}
                        </p>
                        <NuxtImg loading="lazy" :src="doc.img != '' ? doc.img : '/feature.jpg'" class="w-full mb-4"
                            alt="Fatured" />
                        <ul>
                            <li>
                                Status:
                                <b>
                                    {{ doc.status }}
                                </b>
                            </li>
                            <li>
                                Duration:
                                <b>
                                    {{ doc.duration }}
                                </b>
                            </li>
                            <li>
                                Type:
                                <b>
                                    {{ doc.type }}
                                </b>
                            </li>
                            <li>
                                Tools:
                                <b>
                                    {{ doc.tools }}
                                </b>
                            </li>
                            <li>
                                Link:
                                <b>
                                    <a :href="'//' + doc.link" target="_blank"
                                        class="no-underline hover:text-orange-500" rel="no-follow">
                                        {{ doc.link }}
                                    </a>
                                </b>
                            </li>
                        </ul>
                    </div>
                    <article
                        class="prose max-w-none text-black dark:text-white flex-1 border border-gray-200 dark:border-gray-900 p-2 mb-2">
                        <ContentRenderer :value="doc" />
                    </article>
                </div>
            </template>
            <template #not-found>
                <h1>Something is missing</h1>
            </template>
            <template #empty>
                <h1>Document is empty</h1>
            </template>
        </ContentDoc>

        <CallToAction />
    </main>
</template>
