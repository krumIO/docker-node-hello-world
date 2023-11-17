var http = require('http');

var port = 4000;

var server = http.createServer(function (request, response) {
  // Extract the URL path from the request
  var path = request.url;

  // Handle different routes
  if (path === '/') {
    console.log("Success, nothing to see here");
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
  } else if (path === '/about') {
    console.log("About to go down");
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('About page\n');
  } else if (path === '/error') {
    console.log("500 500 Big Error Occured");
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Contact page\n');
  } else {
    // Handle unknown routes with a 404 response
    console.log("This is a 404 message");
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not Found\n');
  }
});

server.listen(port);

console.log('Server running at http://localhost:' + port);
