<template>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto">
        <RouterLink  to="/" class="text-white px-4">Home</RouterLink >
        <RouterLink  to="/PokeApi" class="text-white px-4">PokeAPI</RouterLink >
        <RouterLink  to="/TestAlgorithm" class="text-white px-4">Algoritmo</RouterLink >
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  