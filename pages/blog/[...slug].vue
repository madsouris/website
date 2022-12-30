<template>
    <main>
        <ContentDoc>
            <template v-slot="{ doc }">
                <h1>
                    {{ doc.title }}
                </h1>
                <p>
                    {{ doc.author }}
                </p>
                <article class="prose">
                    <ContentRenderer :value="doc" />
                </article>
            </template>
            <template #not-found>
                <h1>Something is missing</h1>
            </template>
            <template #empty>
                <h1>Document is empty</h1>
            </template>
        </ContentDoc>
    </main>
</template>
