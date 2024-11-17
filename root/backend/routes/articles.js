const express = require('express');

const {
    getArticles,
    getArticle,
    createArticle,
    deleteArticle,
    updateArticle
} = require('../controllers/articleController');

const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

router.get('/', getArticles);

router.get('/:id', getArticle);

// Require authentication for the following routes
router.use(requireAuth);

router.post('/', createArticle);

router.delete('/:id', deleteArticle);

router.patch('/:id', updateArticle);

module.exports = router;
