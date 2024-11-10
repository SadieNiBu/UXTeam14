const Member = require('../models/Member');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

// Get all members
const getMembers = async (req, res) => {
    const members = await Member.find({}).sort({ createdAt: -1 });
    res.status(200).json(members);
};

// Get a single member
const getMember = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Member not found' });
    }

    const member = await Member.findById(id);

    if (!member) {
        return res.status(404).json({ error: 'Member not found' });
    }

    res.status(200).json(member);
};

// Create a new member
const createMember = async (req, res) => {
    const { name, role, classification } = req.body;
    const image = req.file ? req.file.path : null; // Save file path if an image was uploaded
    
    try {
        const member = await Member.create({ name, role, classification, image });
        res.status(200).json(member);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a member
const deleteMember = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Member not found' });
    }

    const member = await Member.findOneAndDelete({ _id: id });

    if (member.image) {
        const imagePath = path.join(__dirname, '..', member.image);
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error('Error deleting image file:', err);
            } else {
                console.log('Image file deleted successfully');
            }
        });
    }

    if (!member) {
        return res.status(404).json({ error: 'Member not found' });
    }

    res.status(200).json(member);
};

// Update a member
const updateMember = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Member not found' });
    }

    const { name, role, classification } = req.body;
    const image = req.file ? req.file.path : undefined; // Use image file path if uploaded
    
    const updateData = { name, role, classification };
    if (image) updateData.image = image; // Only update image if a new file is uploaded

    const member = await Member.findOneAndUpdate({ _id: id }, updateData, { new: true });

    if (!member) {
        return res.status(404).json({ error: 'Member not found' });
    }

    res.status(200).json(member);
};

module.exports = {
    getMembers,
    getMember,
    createMember,
    deleteMember,
    updateMember
};