<template>
  <div class="main">
    <!-- Matrix Background -->
    <canvas ref="matrixCanvas" class="matrix-background"></canvas>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const matrixCanvas = ref(null);

onMounted(() => {
  const canvas = matrixCanvas.value;
  const ctx = canvas.getContext('2d');

  const letters = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const fontSize = 14;
  let columns;
  let drops;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / fontSize);
    drops = Array.from({ length: columns }, () => 1);
  }

  resize(); // Initial setup

  window.addEventListener('resize', resize);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, i) => {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      const x = i * fontSize;
      ctx.fillText(text, x, y * fontSize);

      drops[i] = y * fontSize > canvas.height || Math.random() > 0.975 ? 0 : y + 1;
    });
  }

  setInterval(draw, 33);
});

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background: #000; /* fallback background */
}

.main {
  text-align: center;
  padding: 2rem;
  position: relative;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: auto; /* Allow vertical scrolling on smaller screens */
}

/* Matrix canvas covers entire screen */
.matrix-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  pointer-events: none;
  display: block;
}


/* Navigation styling */
nav {
  background: linear-gradient(90deg, #8B0000, #FF0000, #FF6347);
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 4px solid #cc0000;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  white-space: nowrap;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .main {
    padding: 1rem;
  }

  nav {
    flex-direction: column;
    align-items: center;
    font-size: 1.1rem;
    padding: 0.8rem 1rem;
    border-radius: 0;
  }
}

/* Smaller mobile devices */
@media (max-width: 800px) {
  nav {
    font-size: 1rem;
    padding: 0.6rem 1rem;
  }

  .main {
    padding: 0.5rem;
  }
}
</style>
