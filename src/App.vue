<template>
   <nav class="bg-[#111516] py-4 md:text-xl">
      <div class=" flex items-center gap-x-14 px-10">
         <router-link to="/">
            <img src="./assets/logo.png" width="30" height="30" alt="Inicio">
         </router-link>
         <ul class="justify-center items-center flex space-x-6 space-y-0">
            <li class="text-gray-700 hover:text-gray-900">
               <router-link to="/">Home</router-link>
            </li>
            <li class="text-gray-700 hover:text-gray-900">
               <router-link to="/about">About</router-link>
            </li>
         </ul>
      </div>
   </nav>
   <hr />
   <router-view />
</template>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
}

body {
   background-color: #313638;
}

nav a {
   color: #98a5b2;

   &:hover {
      @apply text-blue-300;
   }
}

nav a.router-link-exact-active {
   @apply text-blue-500 font-bold;
}
</style>
