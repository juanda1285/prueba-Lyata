<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <nav-bar />

    <!-- Contenido principal -->
    <RouterView class="flex-grow" />

    <!-- Footer -->
    <footer-component class="mt-auto" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  }
}
</script>

<style></style>
