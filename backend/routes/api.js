const express = require('express');
const router = express.Router();

// Example data
const projects = [
  { id: 1, title: 'Portfolio Website', tech: 'Vue.js, Node.js, Javscript', github: 'https://github.com/Clint2205/Clint-Portfolio.git'},
  { id: 2, title: 'AirBnB Natural Langauge Processing', tech: 'R-Programming, R-Studio ', github: 'https://github.com/Clint2205/AirBnB-NLP-.git' },
  { id: 3, title: 'Feature Engineering School Logs', tech: 'Python, Jupyter Notebook', github: 'https://github.com/Clint2205/Feature-Engineering.git' },
  {
    "id": 4,
    title: "Voice Assist for Stroke Survivors (Development)",
    description: "A speech and facial recognition to text app for communication assistance.",
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
