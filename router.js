'use strict';

// Example 4 - Adding a router to be passed in as an argument when server is started from index; server then calls the router to route paths when necessary
// Example 6 - passing handle object in to be used to route to proper paths
// Example 11 = pass post content to request handlers
function route(handle, pathname, response, postData) {
  console.log(`About to route a request for ${pathname}`);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData);
  } else {
    console.log(`No request handler found for ${pathname}`);
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('404 Not found');
    response.end();
  }
}

exports.route = route;