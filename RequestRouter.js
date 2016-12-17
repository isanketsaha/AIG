/**
 * 
 */

var main = require("./main");
	
function route( pathname , handle ) {
	console.log("About to route a request for " + pathname);
	console.log(handle[pathname]);
	console.log("Sanket Hnadle  = "+ typeof handle[pathname] === 'function');
	if (typeof handle[pathname] === 'function')
	{
	console.log("Request handler found for " + pathname);
	handle[pathname]();
	} 
	else {
	console.log("No request handler found for " + pathname);
	}
	
}

exports.route = route;