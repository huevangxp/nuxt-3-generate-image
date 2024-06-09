import axios from "axios"

export default defineNuxtPlugin((nuxtApp) => {
    const api = axios.create({
        baseURL:"https://api.stability.ai/v1/generation/stable-diffusion-v1-6"
    })

    return {
        provide: {
            axios: api
        }
    }
})
