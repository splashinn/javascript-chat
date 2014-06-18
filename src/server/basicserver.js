// basicserver.js
// (C) 2014 kmaune0

// import node's http module
var http = require("http");
var handler = require("./request-handler.js");
// callback function that will be called each time a client makes a request

// this server port is not likely to be taken, so we will use this one to listen
// in on
var port = 8080;

// since this server is running on a local machine, it will listen on the IP
// address 127.0.0.1, which is a address that always refers to localhost
var ip = "127.0.0.1";

// use node's http module to create a server and start it listening on
// the given port and ip
var server = http.createServer(handler.handleRequest);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

// to start this server, run: node basicserver.js on the command line
// to connect to the server, load http://127.0.0.1:8080 in browser
// server.listen() will continue running as long as there is the possibility
// of serving more requests. To stop the server, hit Ctrl-C on the command line
