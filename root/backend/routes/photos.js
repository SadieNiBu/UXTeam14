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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.get('/', getPhotos);
router.get('/:id', getPhoto);

// require auth for all subsequent routes
router.use(requireAuth);

router.post('/', upload.single('image'), createPhoto);
router.delete('/:id', deletePhoto);
router.patch('/:id', upload.single('image'), updatePhoto);

module.exports = router;