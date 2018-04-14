'use strict';

const exec = require('child_process').exec;
const querystring = require('querystring');
const fs = require('fs');
const formidable = require('formidable');

// Example 5 - module to handle requests
// Example 7 - make request handlers return a value to display
// Example 8 - experminenting with blocking/non-blocking
// Example 9 - serving html
// Example 11 - use query string to only send certain fields from the post data
// Example 12 - implement file adding
function start(response) {
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
    '<form action="/upload" enctype="multipart/form-data" method="post">' +
    '<input type="file" name="upload">' +
    '<input type="submit" value="Upload file" />' +
    '</form>' +
    '</body>'+
    '</html>';
  
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();

}

function upload(response, request) {
  console.log('Request handler \'upload\' was called');

  let form = new formidable.IncomingForm();
  console.log('about to parse');
  form.parse(request, function (error, fields, files) {
    console.log('parsing done');

    fs.rename(files.upload.path, 'tmp/test.png', error => {
      if (error) {
        fs.unlink('tmp/test.png');
        fs.rename(files.upload.path, 'tmp/test.png');
      }
    });
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('received image:<br/>');
    response.write('<img src=\'/show\' />');
    response.end();
  });
}

function show(response) {
  console.log('Request handler \'show\' was called.');
  response.writeHead(200, {'Content-Type': 'image/png'});
  fs.createReadStream('tmp/test.png').pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;