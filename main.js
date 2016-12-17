/**
 * 
 */

var server = require("./app");
var requestRouter = require("./RequestRouter");
var requestHandlers = require("./RequestHandlers");
var handle = {}

handle["/"] = requestHandlers.login;
handle["/login"] = requestHandlers.login;
handle["/facebook"] = requestHandlers.facebook;


server.start(requestRouter.route, handle);