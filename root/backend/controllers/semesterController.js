const Semester = require('../models/Semester');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

// Get all semester info
const getSemesters = async (req, res) => {
    const semesters = await Semester.find({}).sort({ createdAt: -1 });
    res.status(200).json(semesters);
};

// Get a single semester
const getSemester = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Semester not found' });
    }

    const semester = await Semester.findById(id);

    if (!semester) {
        return res.status(404).json({ error: 'Semester not found' });
    }

    res.status(200).json(semester);
};

// Create a new semester
const createSemester = async (req, res) => {
    const { sem, year } = req.body;
    
    try {
        const semester = await Semester.create({ sem, year });
        res.status(200).json(semester);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a semester
const deleteSemester = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Semester not found' });
    }

    const semester = await Semester.findOneAndDelete({ _id: id });

    if (!semester) {
        return res.status(404).json({ error: 'Semester not found' });
    }

    res.status(200).json(semester);
};

// Update a Semester
const updateSemester = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Semester not found' });
    }

    const { sem, year } = req.body;
    
    const updateData = { sem, year };

    const semester = await Semester.findOneAndUpdate({ _id: id }, updateData, { new: true });

    if (!semester) {
        return res.status(404).json({ error: 'Semester not found' });
    }

    res.status(200).json(semester);
};

module.exports = {
    getSemesters,
    getSemester,
    createSemester,
    deleteSemester,
    updateSemester
};