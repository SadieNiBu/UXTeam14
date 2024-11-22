const Photo = require('../models/Photo');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const cloudinary = require('../cloudinary')

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
    try {
      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'c3_uploads',
      });
  
      // Create new photo in the database
      const photo = await Photo.create({
        imageUrl: result.secure_url,
        cloudinaryId: result.public_id,
      });
  
      res.status(200).json(photo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };  

// Delete a photo
const deletePhoto = async (req, res) => {
    const { id } = req.params;
  
    try {
      const photo = await Photo.findById(id);
  
      if (!photo) {
        return res.status(404).json({ error: 'Photo not found' });
      }
  
      await cloudinary.uploader.destroy(photo.cloudinaryId);
  
      // Delete photo from database
      await photo.remove();
  
      res.status(200).json({ message: 'Photo deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };  

// Update a photo
const updatePhoto = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find the existing photo
      const photo = await Photo.findById(id);
  
      if (!photo) {
        return res.status(404).json({ error: 'Photo not found' });
      }
  
      // Delete existing image from Cloudinary
      await cloudinary.uploader.destroy(photo.cloudinaryId);
  
      // Upload new image
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'c3_uploads',
      });
  
      // Update photo in the database
      photo.imageUrl = result.secure_url;
      photo.cloudinaryId = result.public_id;
      await photo.save();
  
      res.status(200).json(photo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };  

module.exports = {
    getPhotos,
    getPhoto,
    createPhoto,
    deletePhoto,
    updatePhoto
};