<script setup></script>

<template>
    <main>
        <ContentList path="/blog">
            <!-- Default list slot -->
            <template v-slot="{ list }">
                <div
                    v-for="article in list"
                    :key="article._path"
                    class="article">
                    <NuxtLink :to="article._path">
                        <div class="wrapper">
                            <header>
                                <h1 class="text-2xl font-semibold">
                                    {{ article.title }}
                                </h1>
                                <p>
                                    {{ article.description }}
                                </p>
                            </header>
                        </div>
                    </NuxtLink>
                </div>
            </template>

            <!-- slot to display message when no content is found -->
            <template #not-found>
                <p>No articles found.</p>
            </template>
        </ContentList>
    </main>
</template>
