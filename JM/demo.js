const express = require('express');
const mongoose = require('mongoose');
const Student = require('./Schema');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ASHU')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
// Create a new student 
app.post('/students',async (req,res) => {
    try{
        const student = new Student(req.body);
        await student.save();
        console.log('Student saved successfully');
        res.status(201).json(student);
    }
    catch(err){
        console.error('Error saving student:', err);
        res.status(500).json({ error: 'Failed to save student' });
    }
});
//Get all students
app.get('/get-students',async (req,res) => {
    try{
        const students = await Student.find();
        res.json(students);
    }
    catch(err){
        console.error('Error fetching students:', err);
        res.status(500).json({ error: 'Failed to fetch students' });
    }
});
//Delete student by ID
app.delete('/delete-student/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        await Student.findByIdAndDelete(studentId);
        res.json({ message: 'Student deleted successfully' });
    } catch (err) {
        console.error('Error deleting student:', err);
        res.status(500).json({ error: 'Failed to delete student' });
    }   
});
// Update student by ID
app.put('/update-student/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const updatedData = req.body;
        const student = await Student.findByIdAndUpdate(studentId, updatedData, { new: true });
        res.json(student);
    } catch (err) {
        console.error('Error updating student:', err);
        res.status(500).json({ error: 'Failed to update student' });
    }
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});