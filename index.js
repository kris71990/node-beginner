'use strict';

// Example 3 - server turned into module in server file and then started from index file
// dependency injection
const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route, handle);