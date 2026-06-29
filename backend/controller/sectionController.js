// backend/controllers/sectionController.js
const Section = require('../models/Section');

// @desc    Get all sections (or filter by query: /api/sections?type=services)
// @route   GET /api/sections
const getSections = async (req, res) => {
  try {
    const { type } = req.query;
    const filter = type ? { sectionType: type } : {};
    
    const sections = await Section.find(filter).sort({ createdAt: -1 });
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new section
// @route   POST /api/sections
const createSection = async (req, res) => {
  try {
    const { sectionType, title, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required!' });
    }

    const newSection = new Section({
      sectionType,
      title,
      description,
      imageUrl: req.file.path // Cloudinary URL
    });

    const savedSection = await newSection.save();
    res.status(201).json(savedSection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update an existing section
// @route   PUT /api/sections/:id
const updateSection = async (req, res) => {
  try {
    const { sectionType, title, description } = req.body;
    let updateData = { sectionType, title, description };

    // Agar admin ne update ke waqt nayi image upload ki hai
    if (req.file) {
      updateData.imageUrl = req.file.path;
    }

    const updatedSection = await Section.findByIdAndUpdate(
      req.params.id, 
      updateData, 
      { new: true } 
    );

    if (!updatedSection) {
      return res.status(404).json({ message: 'Section not found!' });
    }

    res.status(200).json(updatedSection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a section
// @route   DELETE /api/sections/:id
const deleteSection = async (req, res) => {
  try {
    const section = await Section.findByIdAndDelete(req.params.id);
    
    if (!section) {
      return res.status(404).json({ message: 'Section not found!' });
    }

    res.status(200).json({ message: 'Section deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Teeno controllers ko export kar diya taake routes inhe use kar sakein
module.exports = {
  getSections,
  createSection,
  updateSection,
  deleteSection
};