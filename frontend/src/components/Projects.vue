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
  const res = await fetch('http://localhost:3001/api/projects')
  const data = await res.json()
  projects.value = data
})
</script>

<style scoped>
.project-container {
  background-color: #000; /* black background */
  color: #fff;            /* white text for contrast */
  padding: 2rem;
  border-radius: 10px;
  font-size: 1.2rem;       /* slightly bigger font */
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

@media screen and (max-width: 1000px) {
  .project-container {
    padding: 1rem;
    font-size: 1rem;
    border-radius: 0;
  }

  .project-container h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  .project-container li {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
    line-height: 1.4;
    word-wrap: break-word;
  }
}

</style>
