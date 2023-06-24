<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/location">Location</RouterLink>
        <RouterLink to="/episode">Episode</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>


</style>
