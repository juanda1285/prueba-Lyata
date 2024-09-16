<template>
  <div class="p-4 flex flex-col items-center">
    <!-- Título -->
    <h1 class="text-2xl font-bold mb-4">Algoritmo de Consultas</h1>

    <!-- Input del tamaño de la lista -->
    <div class="mb-4">
      <label class="block mb-2">Tamaño de la lista de números a evaluar:</label>
      <input v-model.number="listSize" type="number" class="border p-2 rounded w-64" placeholder="Ingresa el tamaño de la lista" />
    </div>

    <!-- Input de la lista de números -->
    <div class="mb-4">
      <label class="block mb-2">Lista de números (separados por espacios):</label>
      <input v-model="listInput" type="text" class="border p-2 rounded w-64" placeholder="Ejemplo: 2 4 5 7 9" />
    </div>

    <!-- Input del número de consultas -->
    <div class="mb-4">
      <label class="block mb-2">Número de consultas:</label>
      <input v-model.number="queryCount" type="number" class="border p-2 rounded w-64" placeholder="Ingresa el número de consultas" />
    </div>

    <!-- Input de las consultas -->
    <div class="mb-4">
      <label class="block mb-2">Números a evaluar (separados por espacios):</label>
      <input v-model="queryInput" type="text" class="border p-2 rounded w-64" placeholder="Ejemplo: 2 5 6 10" />
    </div>

    <!-- Botón para ejecutar el algoritmo -->
    <button @click="processQueries" class="bg-blue-500 text-white px-4 py-2 rounded">Evaluar</button>

    <!-- Resultados -->
    <div v-if="results.length" class="mt-6">
      <h2 class="text-lg font-semibold">Resultados:</h2>
      <div v-for="(result, index) in results" :key="index" class="mt-2">
        <p>{{ result }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestAlgorithm',
  data() {
    return {
      listSize: 0,          // Tamaño de la lista (Aunque no se usa )
      listInput: '',         // Input de la lista de números
      queryCount: 0,         // Número de consultas (Tampoco es necesario)
      queryInput: '',        // Input de las consultas
      results: [],           // Resultados para mostrar
    };
  },
  methods: {
    processQueries() {
      // Convertir los inputs de texto a arreglos de números
      const list = this.listInput.split(' ').map(Number).sort((a, b) => a - b);
      const queries = this.queryInput.split(' ').map(Number);

      // Limpiar los resultados previos
      this.results = [];

      // Evaluar cada consulta
      queries.forEach(query => {
        let lower = 'X';
        let higher = 'X';

        // Buscar el número más bajo que sea mayor que el consultado
        for (let i = 0; i < list.length; i++) {
          if (list[i] < query) {
            lower = list[i];
          }
          if (list[i] > query) {
            higher = list[i];
            break;
          }
        }

        // Almacenar el resultado
        this.results.push(`${lower} ${higher}`);
      });
    },
  },
};
</script>

