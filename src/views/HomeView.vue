<script setup>
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Resume from '../components/Resume.vue'
import Projects from '../components/Projects.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>

</script>

<template>
  <Home />
  <About />
  <Resume />
  <Projects />
</template>

<style scoped>
@import "../assets/site.css";
</style>
