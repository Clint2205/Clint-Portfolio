<template>
  <div>
    <h1>My Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.title }} – {{ project.tech }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const projects = ref([])

onMounted(async () => {
  const res = await fetch('http://localhost:3001/api/projects')
  const data = await res.json()
  projects.value = data
})
</script>
