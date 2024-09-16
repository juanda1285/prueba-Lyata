<template>
    <div class="p-4 flex flex-col items-center">
      <!-- Título centrado -->
      <h1 class="text-3xl font-bold mb-6">PokeAPI</h1>
      
      <!-- Botón centrado -->
      <button @click="fetchPokemon" class="bg-red-500 text-white px-4 py-2 rounded mb-6">Cargar Pokémon Aleatorio</button>
      
      <!-- Mostrar loading mientras se hace la petición -->
      <div v-if="loading" class="text-blue-500 font-bold">Cargando...</div>
  
      <!-- Mostrar mensaje de error si ocurre -->
      <div v-if="error" class="text-red-500 font-bold">Error al cargar el Pokémon: {{ error }}</div>
      
      <!-- Mostrar imagen y detalles del Pokémon si la petición fue exitosa -->
      <div v-if="pokemon && !loading" class="flex flex-col items-center mt-4">
        <img :src="pokemon.sprites.front_default" alt="Pokemon Image" class="mb-4 w-48 h-48">
  
        <!-- Tabla con la información del Pokémon -->
        <table class="table-auto border-collapse border border-gray-400 text-left">
          <thead>
            <tr>
              <th class="border px-4 py-2">Campo</th>
              <th class="border px-4 py-2">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2"><strong>Nombre</strong></td>
              <td class="border px-4 py-2">{{ pokemon.name }}</td>
            </tr>
            <tr>
              <td class="border px-4 py-2"><strong>Altura</strong></td>
              <td class="border px-4 py-2">{{ pokemon.height }}</td>
            </tr>
            <tr>
              <td class="border px-4 py-2"><strong>Peso</strong></td>
              <td class="border px-4 py-2">{{ pokemon.weight }}</td>
            </tr>
            <tr>
              <td class="border px-4 py-2"><strong>Experiencia Base</strong></td>
              <td class="border px-4 py-2">{{ pokemon.base_experience }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'pokeApi',
    data() {
      return {
        pokemon: null,
        loading: false,  // Indicador de loading
        error: null,     // Manejo de error
      };
    },
    methods: {
      async fetchPokemon() {
        this.loading = true;  // Activar loading
        this.error = null;    // Resetear el error
        this.pokemon = null;  // Resetear el Pokémon
        const randomId = Math.floor(Math.random() * 807) + 1;
  
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
          
          if (!response.ok) {
            throw new Error('Fallo al obtener los datos'); // Error si la respuesta no es exitosa
          }
  
          const data = await response.json();
          this.pokemon = data;
        } catch (err) {
          this.error = err.message;  // Capturar el mensaje de error
        } finally {
          this.loading = false;  // Desactivar loading al terminar
        }
      },
    },
  };
  </script>
  