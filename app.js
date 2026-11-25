
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static website files from the project directory
app.use(express.static(__dirname));

// Start local server
app.listen(PORT, 'localhost', () => {
    console.log(`Spotify Clone running at http://localhost:${PORT}`);
});
