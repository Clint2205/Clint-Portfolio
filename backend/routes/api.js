const express = require('express');
const router = express.Router();

// Example data
const projects = [
  { id: 1, title: 'Portfolio Website', tech: 'Vue.js, Node.js' },
  { id: 2, title: 'AI Chatbot', tech: 'Python, TensorFlow' },
  { id: 3, title: 'Weather App', tech: 'React, Express' },
  {
    "id": 4,
    title: "Voice Assist for Stroke Survivors",
    description: "A speech-to-text app for communication assistance.",
    tech: "Python, Flask, NLP",
    github: "https://github.com/Clint2205/stroke-voice-app"
  }
];

// Handle GET /api/projects
router.get('/projects', (req, res) => {
  res.json(projects);
});

// Handle GET /api/info
router.get('/info', (req, res) => {
  res.json({ github: 'https://github.com/Clint2205' });
});

module.exports = router;
