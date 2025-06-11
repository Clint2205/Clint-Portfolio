<template>
  <div class="main">
    <!-- Matrix Background -->
    <canvas ref="matrixCanvas" class="matrix-background"></canvas>

   <nav class="layout-container">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';

const matrixCanvas = ref(null);

onMounted(() => {
  const canvas = matrixCanvas.value;
  const ctx = canvas.getContext('2d');

  const letters = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const fontSize = 14;
  let columns;
  let drops;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array.from({ length: columns }, () => 1);
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

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

  const interval = setInterval(draw, 33);

  onBeforeUnmount(() => {
    clearInterval(interval);
    window.removeEventListener('resize', resizeCanvas);
  });
});
</script>

<style scoped>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background: black; /* fallback background */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Matrix canvas fills entire screen and stays fixed */
.matrix-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  z-index: -1;
  pointer-events: none;
}


/* Content wrapper */
.main {
  min-height: 100vh;
  max-width: 100vw;
  padding: 2rem;
  z-index: 1;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
}


/* Navigation */
nav {
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(90deg, #8b0000, #ff0000, #ff6347);
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
.layout-container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
}


nav a {
  color: white;
  text-decoration: none;
  white-space: nowrap;
}

/* Responsive styling */
@media (max-width: 800px) {
  nav {
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    padding: 0.8rem 1rem;
    border-radius: 0;
  }

  .main {
    padding: 1rem;
  }
}

@media (max-width: 600px) {
  nav {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
  }

  .main {
    padding: 0.5rem;
  }
}
</style>
