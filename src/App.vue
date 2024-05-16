<template>
  <div>
      <Header />
  <main>
      <RouterView />
  </main>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import Header from "./components/Header.vue";

onMounted(() => {
    document.documentElement.style.transition = "background-color 0.5s ease";
});
</script>