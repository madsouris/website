<template>
    <div class="container mx-auto lg:w-2/3 px-2">
        <NavigationTop />

        <slot />

        <NavigationFoot />
    </div>
</template>

<script setup lang="ts">
useHead({
    script: [
        {
            src: 'https://rawcdn.githack.com/nextapps-de/spotlight/0.7.8/dist/spotlight.bundle.js',
            type: 'text/javascript',
        },
    ],
})
</script>