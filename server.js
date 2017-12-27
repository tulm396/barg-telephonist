// server.js

var express = require('express');
var path	= require('path');
var app		= express();

app.use(express.static(path.resolve(__dirname, './dist')));

app.get('/', (req, res) => {
    res.sendFile('./dist/pages/index.html', {
        root: __dirname
    });
});

app.get('*', (req, res) => {
	res.redirect('/');
});

// Create http server
app.listen(process.env.PORT || 8080);
