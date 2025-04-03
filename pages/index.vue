<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
const mouse = reactive(useMouse())
</script>

<template>
  <h1>nuxt template</h1>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
  {{ mouse.x }} {{ mouse.y }}
</template>