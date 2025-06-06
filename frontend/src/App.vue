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

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const letters = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const fontSize = 14;
  const columns = canvas.width / fontSize;
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
.main {
  text-align: center;
  padding: 2rem;
  position: relative; /* keep content stacking context */
}

nav {
  background: linear-gradient(90deg, #8B0000, #FF0000, #FF6347);
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 4px solid #cc0000;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

nav a {
  color: white;
  margin: 0 1rem;
  text-decoration: none;
}

/* Add this for your matrix canvas */
.matrix-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
}
</style>
