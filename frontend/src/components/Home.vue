<template>

  

  <div class="container">
  
    <div v-if="showModal" class="modal" @click="showModal = false">
  <img :src="fullImageSrc" alt="Full Clint" class="modal-img" @click.stop />
</div>

  
      <img
  src="/images/Clint.jpg"
  alt="clint"
  class="clint"
  @click="openModal('/images/Clint.jpg')"
/>


    <h1>Hello, I’m Clint Muzanenhamo</h1>
    <p>{{ description }}</p>


    <header>
    
      <p class="tagline">Aspiring Developer | Computer Scientist | MSc Student</p>
    </header>

    <section class="about">
      <h2>About Me</h2>
      <p>
        I'm Clint Muzanenhamo, a Computer Scientist and MSc Data Science student driven by innovation in AI,
        accessibility, and voice technology. I focus on creating useful tools that solve real-world problems.
      </p>
    </section>

    <section class="social">
      <h2>Connect with Me</h2>
      <a href="https://github.com/Clint2205" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/clint-muzanenhamo-224646277/" target="_blank">LinkedIn</a>
      <a href="mailto:swifty2205@yahoo.co.uk">Email</a>
    </section>

    <section class="projects">
      <h2>Projects</h2>
      <div class="project-card" v-for="project in projects" :key="project.id">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <small><strong>Tech:</strong> {{ project.tech }}</small>
        <a :href="project.github" target="_blank">View on GitHub</a>
      </div>
    </section>

    <section class="skills">
      <h2>Skills</h2>
      <div v-for="skill in skills" :key="skill.name" class="skill">
        <span>{{ skill.name }}</span>
        <div class="bar">
          <div class="level" :style="{ width: skill.level + '%' }"></div>

           <span class="tooltip">{{ skill.level }}%</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
//import image 

const showModal = ref(false)
const fullImageSrc = ref('')

function openModal(src) {
  fullImageSrc.value = src
  showModal.value = true
}


const description = ref('Loading...')
const projects = ref([])
const skills = ref([
  { name: 'JavaScript', level: 85 },
  { name: 'Vue.js', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Python', level: 75 },
  { name: 'Machine Learning', level: 75 },
   { name: 'R-Programming', level: 60 }

])

onMounted(async () => {
  const res = await fetch('http://localhost:3001/api/projects')
  const data = await res.json()
  projects.value = data
})
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  color: #f1f1f1; /* Light text for contrast */
  background: linear-gradient(145deg, #0d0d0d, #1a1a1a); /* Glossy black gradient */
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.05), 
              0 4px 20px rgba(0, 0, 0, 0.6); /* Inner highlight + outer shadow */
  border-radius: 10px;
}

h1 {

  color: #f9f9f9;
}

header {
  text-align: center;
  padding-bottom: 1rem;
}

.avatar {
  width: 140px;
  border-radius: 50%;
  border: 4px solid #0078d7;
}

.tagline {
  color: #f9f9f9;
  font-size: 1.1rem;
  margin-top: 0.2rem;
}

section {
  margin-top: 2.5rem;
}

section h2 {
  background: linear-gradient(90deg, #8B0000, #FF0000, #FF6347);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; /* Fallback for non-webkit browsers */
  color: transparent;
  border-bottom: 2px solid #ddd;
  padding-bottom: 0.3rem;
}


.about p,
.projects p,
.skills span {
  font-size: 1rem;
  line-height: 1.5;
  color:#f9f9f9;

}

.projects h3,
.projects p,
.projects
{

  color: black;
}

.social a {
  margin-right: 1rem;
  display: inline-block;
  color: #0078d7;
  text-decoration: none;
}

.project-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #f9f9f9;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.skills {
  margin-top: 2rem;
}

.skill {
  margin-bottom: 1.5rem;
  text-align: left;
}

.bar {
  background-color: #ddd;
  border-radius: 8px;
  overflow: hidden;
  height: 20px;
  position: relative;
}

.level {
  background-color: #4caf50;
  height: 100%;
  position: relative;
  transition: width 0.5s ease-in-out;
}

.tooltip {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.level:hover .tooltip {
  opacity: 1;
}


.main {
  text-align: center;
  padding: 2rem;
}
.logo {
  width: 100px;
}
.clint {
  width: 250px;
  border-radius: 1000%;
  margin-top: 1rem;
  object-fit: cover;
  border: 6px solid #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: block;
  margin: 2rem auto;
}


.clint:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px #000;
  transition: all 0.3s ease;
  cursor: pointer;
}

body {
  background: radial-gradient(ellipse at bottom, #0f0f0f 0%, #000000 100%);
  color: white;
  font-family: 'Segoe UI', sans-serif;
  overflow: hidden;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(
    0deg,
    rgba(0, 255, 0, 0.05),
    rgba(0, 255, 0, 0.05) 1px,
    transparent 1px,
    transparent 2px
  );
  animation: scroll 20s linear infinite;
  z-index: -1;
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}



</style>
