<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <Header />
  </header>

  <main class="site-main">
    <RouterView />
  </main>

  <footer>
    <Footer />
  </footer>
</template>

<style>
@import "./assets/site.css";
</style>
