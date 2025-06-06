<template>
  
  
  <div>
    <h1>Contact Me</h1>
    <p>Email: <a href="mailto:swifty2205@yahoo.co.uk">swifty2205@yahoo.co.uk</a></p>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

onMounted(async () => {
  // Fetch info
  const res = await fetch('/api/info')
  const data = await res.json()
  description.value = `Welcome to my portfolio. You can find me on GitHub: ${data.github}`

})

</script>