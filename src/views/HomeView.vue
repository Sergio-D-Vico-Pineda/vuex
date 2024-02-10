<template>
   <div class="flex gap-5 flex-wrap justify-center mt-10">
      <template v-for="card, index in $store.state.cards">
         <Card :title="card.title" :desc="card.desc" :img="card.img" :idc="index"/>
      </template>
   </div>
</template>

<script>
import Card from '@/components/Card.vue';
import { useStore } from 'vuex';

export default {
   name: 'HomeView',
   components: {
      Card
   },
   setup() {
      const store = useStore();
      return {
         ...store.state
      }
   }
}
</script>

<style scoped>
* {
   color: #f3f4f6;
}
</style>
