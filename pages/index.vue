
<template>
  <div style="text-align: center;">
  <div>
    <div>
      <input v-model="text" type="text" /><br>
    </div>
    <button @click="sendText">send</button>
  </div>
  <div>
  </div>
  <div v-if="IsLoading">
    <img  src="https://www.royalcyber.com/wp-content/uploads/2019/02/loading.gif" alt="loading" />
   
  </div>
  <div v-else>

    <img  :src="'data:image/png;base64,'+Image" alt="Red dot" />
  </div>
  </div>
</template>

<script lang="ts" setup>

import { storeToRefs } from 'pinia';
import { apiImageStore } from '~/store/apiImage';

const { Image, IsLoading } = storeToRefs(apiImageStore());
const { getImageGenerate } = apiImageStore();


const text = ref('')



const sendText = () => {
  // console.log(text.value);
  getImageGenerate(text.value);
}

</script>
<style scoped>
.page{
display: flex;
justify-content: center;
align-content: center;
}
</style>
