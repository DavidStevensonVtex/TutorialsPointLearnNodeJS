// For example, some of the commonly used events are −

// data − This event is fired when there is data is available to read.

// end − This event is fired when there is no more data to read.

// error − This event is fired when there is any error receiving or writing data.

// finish − This event is fired when all the data has been flushed to underlying system.

var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");