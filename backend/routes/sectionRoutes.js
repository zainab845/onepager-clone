// backend/routes/sectionRoutes.js
const express = require('express');
const router = express.Router();

// 1. Controller se dimaag (functions) import kiye
const { 
  getSections, 
  createSection, 
  updateSection, 
  deleteSection 
} = require('../controller/sectionController');

// 2. Multer middleware import kiya image upload ke liye
const { upload } = require('../config/cloudinary');

// --- CLEAN ROUTES DEFINITION ---

router.route('/')
  .get(getSections)
  .post(upload.single('image'), createSection);

router.route('/:id')
  .put(upload.single('image'), updateSection)
  .delete(deleteSection);

module.exports = router;