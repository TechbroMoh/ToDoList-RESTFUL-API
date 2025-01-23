require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

// Import your Task model
const Task = require('./api/models/todoListModel');



// Get Mongo URI from the .env file
const uri = process.env.MONGO_URI;

mongoose.Promise = global.Promise; // Use global Promise for Mongoose

console.log('MONGO_URI:', process.env.MONGO_URI);// Check if the URI is loaded correctly

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully to Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import and register routes
const routes = require('./api/routes/todoListRoutes');
routes(app); // Register the routes

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Todo List RESTful API server started on port: ${port}`);
});
