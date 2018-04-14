'use strict';

const exec = require('child_process').exec;

// Example 5 - module to handle requests
// Example 7 - make request handlers return a value to display
// Example 8 - experminenting with blocking/non-blocking
function start(response) {
  console.log('Request handler \'start\' was called');

  // function sleep(milliSeconds) {
  //   let startTime = new Date().getTime();
  //   while (new Date().getTime() < startTime + milliSeconds);
  // }
  // sleep(10000);

  // let content = 'empty';

  exec('ls -lah', function (error, stdout, stderr) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(stdout);
    response.end();
  });
  // return content;
  // return 'Hello Start';
}

function upload(response) {
  console.log('Request handler \'upload\' was called');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello upload');
  response.end();
}

exports.start = start;
exports.upload = upload;