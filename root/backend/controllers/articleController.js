const Article = require('../models/Article');
const mongoose = require('mongoose');

// Get all articles
const getArticles = async (req, res) => {
    try {
        const articles = await Article.find({}).sort({ createdAt: -1 });
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
};

// Get a single article
const getArticle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Article not found' });
    }

    try {
        const article = await Article.findById(id);

        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }

        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch the article' });
    }
};

// Create a new article
const createArticle = async (req, res) => {
    const { title, author, date, url } = req.body;

    try {
        const article = await Article.create({ title, author, date, url });
        res.status(201).json(article);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an article
const deleteArticle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Article not found' });
    }

    try {
        const article = await Article.findOneAndDelete({ _id: id });

        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }

        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the article' });
    }
};

// Update an article
const updateArticle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Article not found' });
    }

    try {
        const updatedData = req.body;
        const article = await Article.findOneAndUpdate({ _id: id }, updatedData, { new: true });

        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }

        res.status(200).json(article);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update the article' });
    }
};

module.exports = {
    getArticles,
    getArticle,
    createArticle,
    deleteArticle,
    updateArticle
};
