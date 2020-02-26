// Load express module
const express = require('express');

// Create express server
const app = express();

// Define port
const port = 3000;

// Serve static files (needed to import CSS file)
app.use(express.static('public'));

// Set a basic route
app.get('/', (req, res) => res.send('Hello World!'));

// Make the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));
