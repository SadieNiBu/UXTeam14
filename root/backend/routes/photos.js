const express = require('express');
const multer = require('multer');
const {
  getPhotos,
  getPhoto,
  createPhoto,
  deletePhoto,
  updatePhoto
} = require('../controllers/photoController');

const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

// Set up multer storage in memory
const storage = multer.diskStorage({});

// Initialize multer
const upload = multer({ storage });

// Public routes
router.get('/', getPhotos);
router.get('/:id', getPhoto);

// Require auth for all subsequent routes
router.use(requireAuth);

// Protected routes
router.post('/', upload.single('image'), createPhoto);
router.delete('/:id', deletePhoto);
router.patch('/:id', upload.single('image'), updatePhoto);

module.exports = router;