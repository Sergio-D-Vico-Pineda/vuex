<template>
   <div class="p-6 w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img class="rounded-lg mx-auto" :src="img" alt="imgrandom" />
      <div class="py-3">
         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
         <p class="font-normal text-gray-700 dark:text-gray-400">{{ desc }}</p>
      </div>
      <a
         class="py-3 px-5 cursor-pointer text-sm font-medium text-center rounded-lg hover:bg-green-800 transition-all duration-300 text-white bg-green-500">
         Más informacion
      </a>
   </div>
</template>

<script>
export default {
   props: ['title', 'desc', 'img'],
   name: 'Card',
   setup() {
      return {}
   }
}
</script>
