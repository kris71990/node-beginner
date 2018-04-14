'use strict';

// Example 5 - module to handle requests
function start() {
  console.log('Request handler \'start\' was called');
}

function upload() {
  console.log('Request handler \'upload\' was called');
}

exports.start = start;
exports.upload = upload;