var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");

// Synchronous read: Tutorials Point is giving self learning content
// to teach the world in simple and easy way!!!!!
// Program Ended
// Asynchronous read: Tutorials Point is giving self learning content
// to teach the world in simple and easy way!!!!!