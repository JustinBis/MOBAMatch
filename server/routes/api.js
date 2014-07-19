var express = require('express'),
	api = express.Router();

/*
 * Define routes for the API to handle and their associated functions
 */
api.get('/', function(req, res){
	res.send("MOBAMatch API v0.1 (If you're seeing this, the API is running (probably))");
});

module.exports.api = api;