'use strict';

const exec = require('child_process').exec;
const querystring = require('querystring');

// Example 5 - module to handle requests
// Example 7 - make request handlers return a value to display
// Example 8 - experminenting with blocking/non-blocking
// Example 9 - serving html
// Example 11 - use query string to only send certain fields from the post data
function start(response, postData) {
  console.log('Request handler \'start\' was called');

  // function sleep(milliSeconds) {
  //   let startTime = new Date().getTime();
  //   while (new Date().getTime() < startTime + milliSeconds);
  // }
  // sleep(10000);

  // let content = 'empty';
  // exec('ls -lah', function (error, stdout, stderr) {
  //   response.writeHead(200, {'Content-Type': 'text/plain'});
  //   response.write(stdout);
  //   response.end();
  // });
  // return content;
  // return 'Hello Start';

  let body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' + 'charset=UTF-8" />' + '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    '</form>' +
    '</body>'+
    '</html>';
  
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();

}

function upload(response, postData) {
  console.log('Request handler \'upload\' was called');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('You\'ve sent the text: ' + querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;