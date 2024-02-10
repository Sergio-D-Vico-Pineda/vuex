<template>
   <nav class="bg-[#111516] py-4 md:text-xl px-10">
      <router-link class="flex items-center gap-x-3" to="/">
         <img src="./assets/logo.png" width="30" height="30" alt="Inicio">
         Inicio
      </router-link>
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
