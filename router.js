'use strict';

// Example 4 - Adding a router to be passed in as an argument when server is started from index; server then calls the router to route paths when necessary
// Example 6 - passing handle object in to be used to route to proper paths
function route(handle, pathname) {
  console.log(`About to route a request for ${pathname}`);
  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log(`No request handler found for ${pathname}`);
  }
}

exports.route = route;