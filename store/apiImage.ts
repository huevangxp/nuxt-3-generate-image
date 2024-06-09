// import  axios  from 'axios';
import { defineStore } from "pinia";

export const apiImageStore = defineStore({
    id: "apiImage",
    state: () => ({
        Image: [],
        IsLoading:false
    }),
    actions: {
      async  getImageGenerate(data: string) {
            try {
                const { $axios } = useNuxtApp();
                //   console.log(data);
                this.IsLoading = true
                const reponse = await $axios.post('http://localhost:9000/api/generate-image', { text: data })
                console.log(reponse.data.data.artifacts[0].base64);
                this.Image = reponse.data.data.artifacts[0].base64
            
                this.IsLoading = false
            } catch (error) {
                console.log(error);
            } 
        }
    },
    getters: {},
})