console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Getting data");
//
// Do some processing here...
// 
console.timeEnd('Getting data');

console.info("Program Ended")

// Program Started
// Counter: 10
// Getting data: 0.119ms
// Program Ended 