const mongoose = require('mongoose');
const axios = require('axios');
const cheerio = require('cheerio');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    url: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^https?:\/\//.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    image: {
        type: String,
        required: false
    }
}, { timestamps: true });

// Fetch the article's details before saving
articleSchema.pre('save', async function(next) {
    if (this.url) {
        try {
            const response = await axios.get(this.url);
            const $ = cheerio.load(response.data);

            // Extract image from meta tag
            if (!this.image) {
                const imageUrl = $('meta[property="og:image"]').attr('content') || '';
                if (imageUrl) {
                    this.image = imageUrl;
                }
            }

            // Extract title
            if (!this.title) {
                const pageTitle = $('meta[property="og:title"]').attr('content') || $('title').text();
                if (pageTitle) {
                    this.title = pageTitle.trim();
                }
            }

            // Extract author
            if (!this.author) {
                const author = $('meta[name="author"]').attr('content') || '';
                if (author) {
                    this.author = author.trim();
                }
            }

            // Extract date
            if (!this.date) {
                const date = $('meta[property="article:published_time"]').attr('content') || '';
                if (date) {
                    this.date = new Date(date);
                }
            }
        } catch (error) {
            console.error('Error fetching details for article:', error);
        }
    }
    next();
});

module.exports = mongoose.model('Article', articleSchema);
