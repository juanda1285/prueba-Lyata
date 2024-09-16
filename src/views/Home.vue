<template>
  <div class="flex justify-center items-center mt-10">
    <h1 class="text-4xl font-bold">Prueba Lyata</h1>
  </div>

  <!-- Ajuste de altura con padding y eliminación de h-screen -->
  <div class="flex justify-center items-center mt-16">
    <button @click="this.$router.push('/PokeApi')" class="m-4 bg-blue-500 text-white px-4 py-2 rounded">Ir a
      PokeAPI</button>
    <button @click="this.$router.push('/TestAlgorithm')" class="m-4 bg-green-500 text-white px-4 py-2 rounded">Prueba
      Algoritmia</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>