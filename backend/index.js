require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const sectionRoutes = require('./routes/sectionRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/sections', sectionRoutes);

// =====================================================================
// 🛡️ GLOBAL ERROR SHIELD (Ye Multer ke HTML error ko saaf JSON bana dega)
// =====================================================================
app.use((err, req, res, next) => {
  console.error("🔥 MIDDLEWARE CRASHED:", err);
  
  res.status(500).json({
    status: "Crash Caught",
    errorName: err.name,
    errorMessage: err.message || "Unknown Cloudinary Error",
    fullErrorDetails: err
  });
});

module.exports = app;

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running locally on http://localhost:${PORT}`);
  });
}