// Create web server using Express.js
// Start server using command: node comments.js
// Run in browser using URL: http://localhost:3000/comments
// To stop running server use: Ctrl + C

var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
    res.send('Comments');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});

