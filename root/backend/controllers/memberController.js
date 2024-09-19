const Member = require('../models/Member');
const mongoose = require('mongoose');

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
    const { name, role } = req.body;
    
    try {
        const member = await Member.create({ name, role });
        res.status(200).json(member);
    }   catch (error) {
        res.status(400).json({error: error.message});
    }
};

// Delete a member
const deleteMember = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Member not found' });
    }

    const member = await Member.findOneAndDelete({ _id: id });

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

    const member = await Member.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

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