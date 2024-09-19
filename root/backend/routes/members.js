const express = require('express');
const {
    getMembers,
    getMember,
    createMember,
    deleteMember,
    updateMember
} = require('../controllers/memberController');

const router = express.Router();

router.get('/', getMembers);

router.get('/:id', getMember);

router.post('/', createMember);

router.delete('/:id', deleteMember);

router.patch('/:id', updateMember);

module.exports = router;
