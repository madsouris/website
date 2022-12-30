import Spotlight from 'spotlight.js'

export default defineNuxtPlugin((nuxtApp) => {
    // Doing something with nuxtApp
    return{
        provide: {
            Spotlight
        }
    }
})
