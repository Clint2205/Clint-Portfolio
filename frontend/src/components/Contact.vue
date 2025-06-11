<template>
  <div class="contact-container">
    <h1>Contact Me</h1>
    
    <p>Email: <a href="mailto:swifty2205@yahoo.co.uk">swifty2205@yahoo.co.uk</a></p>
    
    <div class="links">
      <a href="https://github.com/Clint2205" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/clint-muzanenhamo-224646277/" target="_blank">LinkedIn</a>
    </div>

    <form @submit.prevent="sendMessage" class="contact-form">
      <label for="name">Name</label>
      <input id="name" v-model="form.name" required>

      <label for="email">Email</label>
      <input id="email" v-model="form.email" type="email" required>

      <label for="message">Message</label>
      <textarea id="message" v-model="form.message" required></textarea>

      <button type="submit">Send Message</button>

      <p v-if="status" class="status">{{ status }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const status = ref('')

const sendMessage = async () => {
  try {
    const res = await fetch('https://formspree.io/f/xrbkeeje', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })
    if (res.ok) {
      status.value = 'Message sent successfully!'
      form.value = { name: '', email: '', message: '' }
    } else {
      status.value = 'Failed to send message. Try again.'
    }
  } catch (err) {
    status.value = 'Error sending message. Please try later.'
  }
}
</script>

<style scoped>
.contact-container {
  max-width: 700px;
    width: 72vw;

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

.links a {
  display: inline-block;
  margin-right: 1rem;
  color: #0af;
  text-decoration: underline;
}

.contact-form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

.contact-form label {
  margin: 0.5rem 0 0.2rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.contact-form button {
  background-color: #0f0;
  color: #000;
  font-weight: bold;
  padding: 0.7rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.contact-form button:hover {
  background-color: #0c0;
}

.status {
  margin-top: 1rem;
  color: #0f0;
}

@media screen and (max-width: 600px) {
  .contact-container {
    padding: 1rem;
    font-size: 1rem;
    border-radius: 0;
    margin: 1rem;
  }

  h1 {
    font-size: 1.6rem;
    text-align: center;
  }

  .links {
    text-align: center;
    margin-bottom: 1rem;
  }

  .links a {
    display: block;
    margin: 0.5rem 0;
  }

  .contact-form {
    font-size: 0.95rem;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 1rem;
    padding: 0.6rem;
  }

  .contact-form button {
    padding: 0.7rem;
    font-size: 1rem;
  }

  .status {
    font-size: 0.95rem;
    text-align: center;
  }
}



</style>
