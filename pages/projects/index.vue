<script setup></script>

<template>
    <main>
        <div class="border border-gray-200 dark:border-gray-900 p-2 mb-2">
            <h2
                class="text-7xl tracking-tight font-bold font-sans text-black dark:text-white m-0">
                projects
            </h2>
        </div>
        <ContentList path="/projects">
            <!-- Default list slot -->
            <template v-slot="{ list }">
                <div v-for="project in list" :key="project._path">
                    <NuxtLink :to="project._path">
                        <div
                            class="border border-gray-200 dark:border-gray-900 p-2 flex flex-col md:flex-row gap-2 w-full mb-2 hover:border-orange-500">
                            <div class="md:w-1/3 lg:w-1/4">
                                <h3
                                    class="text-2xl font-bold tracking-tight text-black dark:text-white">
                                    {{ project.title }}
                                </h3>
                                <p class="text-sm text-black dark:text-white">
                                    {{ project.type }}
                                </p>
                            </div>

                            <p class="text-black dark:text-white flex-1">
                                {{
                                    project.excerpt.children[0].children[0]
                                        .value
                                }}
                            </p>
                            <div class="md:w-1/4 h-full aspect-square">
                                <NuxtImg
                                    loading="lazy"
                                    :src="
                                        project.img != ''
                                            ? project.img
                                            : '/img/feature.jpg'
                                    "
                                    alt="featured"
                                    class="w-full h-full object-cover object-center" />
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </template>

            <!-- slot to display message when no content is found -->
            <template #not-found>
                <div
                    class="border border-gray-200 dark:border-gray-900 p-2 mb-2 h-64 w-full flex flex-row justify-center items-center">
                    <h1
                        class="text-2xl font-bold tracking-tight text-black dark:text-white text-center">
                        No project found.
                    </h1>
                </div>
            </template>
        </ContentList>
    </main>
    <CallToAction />
</template>
