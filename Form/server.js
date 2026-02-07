const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Essential middleware for parsing form data (fixes req.body undefined)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Serve form page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle enrollment POST
app.post('/enroll', async (req, res) => {
  console.log('Full req.body:', req.body); // Debug log
  const { enrollNo, name, div, sem, email } = req.body;

  if (!enrollNo || !name || !div || !sem || !email) {
    return res.status(400).send('Missing fields');
  }

  const message = `Success! Enrolled: ${enrollNo} - ${name} (${div}, Sem ${sem}) - ${email}`;
  console.log(message);
  return res.send(message);
});

app.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`);
});
