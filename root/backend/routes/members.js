const express = require('express');
const multer = require('multer');
const {
    getMembers,
    getMember,
    createMember,
    deleteMember,
    updateMember
} = require('../controllers/memberController');

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

router.get('/', getMembers);
router.get('/:id', getMember);

// require auth for all subsequent routes
router.use(requireAuth);

router.post('/', upload.single('image'), createMember);
router.delete('/:id', deleteMember);
router.patch('/:id', upload.single('image'), updateMember);

module.exports = router;