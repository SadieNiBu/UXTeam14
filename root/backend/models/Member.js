const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    classification: {
        type: String,
        enum: ['Student', 'Coach'],
        required: true
    },
    imageUrl: {
        type: String,
        required: false,
    },
    cloudinaryId: {
        type: String,
        required: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('Member', memberSchema);