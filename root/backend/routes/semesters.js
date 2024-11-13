const express = require('express');

const {
    getSemesters,
    getSemester,
    createSemester,
    deleteSemester,
    updateSemester
} = require('../controllers/semesterController');

const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

router.get('/', getSemesters);

router.get('/:id', getSemester);

// require auth for all subsequent routes
router.use(requireAuth);

router.post('/', createSemester);

router.delete('/:id', deleteSemester);

router.patch('/:id', updateSemester);

module.exports = router;