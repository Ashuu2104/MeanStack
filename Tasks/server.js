const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, './FORM')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './FORM/index.html'));
});

let enrollments = [];
let idCounter = 1;

app.post('/api/enrollments', async (req, res) => {
    const { enrollNo, name, division, sem, email } = req.body;

    if (!enrollNo || !name || !division || !sem || !email) {
        return res.status(400).json({ error: 'All fields required' });
    }

    const enrollment = {
        id: idCounter++,
        enrollNo, name, division, sem: parseInt(sem), email,
        timestamp: new Date().toISOString()
    };

    enrollments.push(enrollment);
    console.log('Enrollment added:', enrollment);

    return res.setHeader("Content-Type", "application/json").json({ message: 'Success!', data: enrollment, total: enrollments.length });
});
app.get('/api/enrollments', (req, res) => res.json(enrollments));

app.get('/api/enrollments/:id', (req, res) => {
    const enrollment = enrollments.find(e => e.id === parseInt(req.params.id));
    if (!enrollment) return res.status(404).json({ error: 'Not found' });
    res.json(enrollment);
});

app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}/`);
    console.log(`Form: http://localhost:${PORT}/`);
    console.log(`API: http://localhost:${PORT}/api/enrollments`);
});
