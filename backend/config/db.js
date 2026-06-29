const mongoose = require('mongoose');

/**
 * Serverless-friendly MongoDB connector.
 * Re-uses an existing connection when possible to avoid opening
 * multiple connections across lambda invocations.
 */
const connectDB = async () => {
  // If mongoose is already connected, reuse it
  if (mongoose.connection && mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  // Use a global cached promise across hot-reloads / lambda warm containers
  if (global.__mongooseConn) {
    return global.__mongooseConn;
  }

  if (!process.env.MONGO_URI) {
    const err = new Error('MONGO_URI is not set in environment');
    console.error('❌', err.message);
    throw err;
  }

  const connectPromise = mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
      return conn.connection;
    })
    .catch((error) => {
      console.error(`❌ MongoDB connection error: ${error.message}`);
      if (process.env.NODE_ENV !== 'production') process.exit(1);
      throw error;
    });

  global.__mongooseConn = connectPromise;
  return connectPromise;
};

module.exports = connectDB;