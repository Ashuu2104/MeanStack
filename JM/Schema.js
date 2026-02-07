const mon = require('mongoose');

const studentSchema = new mon.Schema({
    name: { type: String},
    email :{ type: String},
    age: { type: Number},
    password: { type: String }
});

const Student = mon.model('Student', studentSchema);

module.exports = Student;

