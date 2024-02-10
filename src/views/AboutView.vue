<template>
   <div>
      <h1 class="text-3xl mt-5">{{ card.title }}</h1>
      <p class="opacity-80">{{ card.desc }}</p>
      <img class="rounded-lg my-5 mx-auto" :src="card.img" alt="imgrandom" />
   </div>
   <router-link
      class="py-3 px-5 cursor-pointer text-sm font-medium text-center rounded-lg hover:bg-green-800 transition-all duration-300 text-white bg-green-500"
      to="/">
      Inicio
   </router-link>
</template>

<script>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
   name: 'AboutView',
   setup() {
      const route = useRoute(), store = useStore();
      const card = store.state.cards[route.params.id];
      return {
         card
      }
   }
}
</script>

<style scoped>
* {
   color: #f3f4f6;
}
</style>