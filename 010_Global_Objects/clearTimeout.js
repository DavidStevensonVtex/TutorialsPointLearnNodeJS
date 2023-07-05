// clearTimeout(t)

// The clearTimeout(t) global function is used to stop a timer that was previously created 
// with setTimeout(). Here t is the timer returned by the setTimeout() function.

function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 var t = setTimeout(printHello, 2000);
 
 // Now clear the timer
 clearTimeout(t);

 // No output, because timer was cleared and printHello was never called.