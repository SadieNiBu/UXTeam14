const Photo = require('../models/Photo');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

// Get all photos
const getPhotos = async (req, res) => {
    const photos = await Photo.find({}).sort({ createdAt: -1 });
    res.status(200).json(photos);
};

// Get a single photo
const getPhoto = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Photo not found' });
    }

    const photo = await Photo.findById(id);

    if (!photo) {
        return res.status(404).json({ error: 'Photo not found' });
    }

    res.status(200).json(photo);
};

// Create a new photo
const createPhoto = async (req, res) => {
    const image = req.file ? req.file.path : null; // Save file path if an image was uploaded
    
    try {
        const photo = await Photo.create({ image });
        res.status(200).json(photo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a photo
const deletePhoto = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Photo not found' });
    }

    const photo = await Photo.findOneAndDelete({ _id: id });

    if (photo.image) {
        const imagePath = path.join(__dirname, '..', photo.image);
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error('Error deleting image file:', err);
            } else {
                console.log('Image file deleted successfully');
            }
        });
    }

    if (!photo) {
        return res.status(404).json({ error: 'Photo not found' });
    }

    res.status(200).json(photo);
};

// Update a photo
const updatePhoto = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Photo not found' });
    }
    
    const image = req.file ? req.file.path : undefined; // Use image file path if uploaded
    
    const updateData = { };
    if (image) updateData.image = image; // Only update image if a new file is uploaded

    const photo = await Photo.findOneAndUpdate({ _id: id }, updateData, { new: true });

    if (!photo) {
        return res.status(404).json({ error: 'Photo not found' });
    }

    res.status(200).json(photo);
};

module.exports = {
    getPhotos,
    getPhoto,
    createPhoto,
    deletePhoto,
    updatePhoto
};