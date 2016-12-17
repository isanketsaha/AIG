/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var http  = require('http');
var url = require("url");
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
//var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
//app.use(express.static(__dirname + '/public'));

/*// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});*/

function start(route, handle) {
	
function onRequest(request, response) {
	console.log("Request received.");
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");

		route(pathname, handle);	
	
	response.writeHead(200, {"Content-Type": "text/plain"});
//	response.write("Hello Sanket");
	response.redirect
	response.end();
}
	var server = http.createServer(onRequest);
	server.listen(7000);

	console.log("Server has started.");
	
}

exports.start = start ;



