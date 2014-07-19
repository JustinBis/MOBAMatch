/* * * * * * * * * * * * * * * * * * * * * * * * * * *
 * MOBA Match Main Server
 * 
 * This file starts the main server for MOBA Match
 * It should initlize both the website and the API
 *
 * By Justin Bisignano
 * * * * * * * * * * * * * * * * * * * * * * * * * * */

/*
 * Load dependencies
 */
var
	express = require('express'),
	app = express(),

	// Are we looking for debug output? Run as 'node server.js debug'
	debug = process.argv[2] == "debug";


/*
 * App configuration
 */
console.log('Configuring App...');
if (debug) app.use(express.logger('dev'));

// Use the api router
app.use('/api', require('./routes/api').api);

// Serve the static website from one directory up
app.use(express.static(__dirname + '/../website'));

// Handle 404 errors gracefully
app.use(function(req, res){
  res.send(404, "Error 404 - This page doesn't exist. Sorry about that.");
});

// Handle server errors properly
app.use(function(err, req, res, next){
  console.error(err);
  res.send(500, "Internal Server Error! Someone probably spilled coffee on the server.");
});


/*
 * Start the app
 */

// Bind the express app to a port, with 80 as the default
app.listen(process.env.PORT || 80);
console.log('App bound to port', process.env.PORT || 80);
