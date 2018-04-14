'use strict';

const http = require('http');

// Example 1 - server setup
// http.createServer((request, response) => {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write('Hello World');
//   response.end();
// }).listen(8888);


// Example 2 - a different way to structure, with callback to createServer written extracted into its own function
// function onRequest(request, response) {
//   console.log('Request received');
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write('Hello World');
//   response.end();
// }

// http.createServer(onRequest).listen(8888);
// console.log('Server has started');


// Example 3 - turning our server script in to a module
function start() {
  function onRequest(request, response) {
    console.log('Request received');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
}

exports.start = start;

