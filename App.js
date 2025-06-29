const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const studentRoutes = require('./routes/studentRoutes');
const errorHandler = require('./errorHandler');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/students', studentRoutes);

// Error handler middleware
app.use(errorHandler);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  }); 