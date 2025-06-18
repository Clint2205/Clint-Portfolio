<template>
  <div class="project-container">
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
  const res = await fetch('https://portfolio-backend-production-f446.up.railway.app/api/projects')
  const data = await res.json()
  projects.value = data
})
</script>

<style scoped>
.project-container {
  
 max-width: 700px;
    width: 80vw;

  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', sans-serif;
  color: #f1f1f1;
  background: rgba(13, 13, 13, 0.6); /* or 0.7 */
backdrop-filter: blur(4px); /* optional glass effect */

  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.05),
    0 4px 20px rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  min-height: 100dvh; /* dynamic viewport height: better for mobile */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;

  position: relative;
  z-index: 1;  /* slightly bigger font */
}

.project-container h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.project-container ul {
  list-style: none;
  padding: 0;
}

.project-container li {
  margin-bottom: 0.5rem;
}



</style>
