var fs = require("fs");

console.log("Going to read directory .");
fs.readdir(".", function(err, files) {
   if (err) {
      return console.error(err);
   }
//    console.log(files);
   files.forEach( function (file) {
      console.log( file );
   });
});

// Going to read directory .
// async_and_sync_file_read.js
// async_close_file.js
// async_create_directory.js
// async_delete_file.js
// async_file_stats.js
// async_open_file.js
// async_read_directory.js
// async_read_file.js
// async_truncate_file.js
// async_write_and_read_file.js