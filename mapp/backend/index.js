const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// Import and connect to MongoDB
const mongoDB = require('./db');
mongoDB();

// Middleware for parsing JSON
app.use(express.json());

// Define routes or middleware as needed
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Handle undefined routes (404)
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
