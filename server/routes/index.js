var express = require('express'),
	app = module.exports = express(),

/*
 * Define routes for the API to handle and their associated functions
 */
app.get('/api', function(req, res){
	res.send("MOBAMatch API v0.1 (If you're seeing this, the API is running (probably))");
});
