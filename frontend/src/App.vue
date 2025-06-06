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

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas(); // Initial sizing
  window.addEventListener('resize', resizeCanvas); // Resizing on window change

  const letters = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array.from({ length: columns }, () => 1);

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

.main {
  text-align: center;
  padding: 2rem;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Matrix canvas covers entire screen */
.matrix-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
  object-fit: cover;
}

/* Header with logo */
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  width: 60px;
  height: auto;
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
}

/* Mobile responsiveness */
@media (max-width: 600px) {
  .main {
    padding: 1rem;
  }

  nav {
    flex-direction: column;
    align-items: center;
    font-size: 1.1rem;
    padding: 0.8rem;
    border-radius: 0;
  }

  .logo {
    width: 40px;
  }
}
</style>
