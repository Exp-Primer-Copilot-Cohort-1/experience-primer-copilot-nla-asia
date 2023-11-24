
// Create web server with Express
const express = require('express');
const app = express();
const port = 3000;

// Add middleware to parse JSON data
app.use(express.json());

// Add middleware to parse URL encoded data
app.use(express.urlencoded({ extended: true }));

// Add middleware for static files
app.use(express.static('public'));

// Import and use the comments router
const commentsRouter = require('./routes/comments.js');
app.use('/api/comments', commentsRouter);

// Start server listening on port
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});


