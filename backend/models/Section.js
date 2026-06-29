// backend/models/Section.js
const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  sectionType: {
    type: String,
    required: true, 
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    // required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Section', sectionSchema);