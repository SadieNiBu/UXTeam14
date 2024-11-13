const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const semesterSchema = new Schema({
    sem: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Semester', semesterSchema);