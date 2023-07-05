// setInterval(cb, ms)

// The setInterval(cb, ms) global function is used to run callback cb repeatedly after 
// at least ms milliseconds. The actual delay depends on external factors like OS timer 
// granularity and system load. A timer cannot span more than 24.8 days.

function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 setInterval(printHello, 2000);

// Hello, World!
// Hello, World!
// Hello, World!
// <Ctrl-C>