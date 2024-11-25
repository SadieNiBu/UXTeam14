const Member = require('../models/Member');
const mongoose = require('mongoose');
const cloudinary = require('../cloudinary')

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

    try {
        let imageUrl = null;
        let cloudinaryId = null;

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'c3_uploads/members',
            });
            imageUrl = result.secure_url;
            cloudinaryId = result.public_id;
        }

        const member = await Member.create({
            name,
            role,
            classification,
            imageUrl,
            cloudinaryId
        });

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

    try {
        const member = await Member.findByIdAndDelete(id);

        if (!member) {
            return res.status(404).json({ error: 'Member not found' });
        }

        if (member.cloudinaryId) {
            await cloudinary.uploader.destroy(member.cloudinaryId);
        }

        res.status(200).json({ message: 'Member deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a member
const updateMember = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Member not found' });
    }

    const { name, role, classification } = req.body;

    try {
        const member = await Member.findById(id);

        if (!member) {
            return res.status(404).json({ error: 'Member not found' });
        }

        if (req.file) {
            if (member.cloudinaryId) {
                await cloudinary.uploader.destroy(member.cloudinaryId);
            }

            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'c3_uploads/members',
            });

            member.imageUrl = result.secure_url;
            member.cloudinaryId = result.public_id;
        }

        member.name = name || member.name;
        member.role = role || member.role;
        member.classification = classification || member.classification;

        await member.save();

        res.status(200).json(member);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getMembers,
    getMember,
    createMember,
    deleteMember,
    updateMember
};