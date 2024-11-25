const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  cloudinaryId: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Photo', photoSchema);