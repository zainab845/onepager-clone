// backend/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Database se connect karein
connectDB();

// Middlewares
app.use(cors());
app.use(express.json()); // Taake frontend se aane wala JSON data samajh sake

// Test Route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: "Active", 
    message: "OnePager Backend is running perfectly!" 
  });
});

// Vercel Serverless ke liye export
module.exports = app;

// Local Computer par chalane ke liye logic
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running locally on http://localhost:${PORT}`);
  });
}