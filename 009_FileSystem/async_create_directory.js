var fs = require("fs");

console.log("Going to create directory /tmp/test");
fs.mkdir('./test',function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});

// Going to create directory /tmp/test
// Directory created successfully!