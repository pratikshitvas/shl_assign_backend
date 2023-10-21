// app.js
const express = require('express');
const mongoose = require('mongoose');
const projectRouter = require('./routes/project'); // Import the project route
const cors =require('cors');
// Load environment variables
require('dotenv').config();

// Create Express app
const app = express();
app.use(cors())

// Connect to MongoDB using the provided URI
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the projectRouter for the routes
app.use('/project', projectRouter); // Use '/project' as the base path for the project routes

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
