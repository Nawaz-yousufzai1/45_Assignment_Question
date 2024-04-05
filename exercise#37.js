"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message.
*/
// For large T-Shirt function syntax
function make_shirt1(size = "Large", message = "I love Typescript") {
    console.log(`Make shirt ${size} with message "${message}" `);
}
make_shirt1();
// For Medium shirt syntax
function make_shirt2(size = "Medium", message = " I love Type script.") {
    console.log(`Make Shirt ${size} size print with message"${message}."`);
}
make_shirt2();
// syntax for shirt of any size
function make_shirt3(size = "Any", message = " Hello, world.") {
    console.log(`Make Shirt ${size} size print with message"${message}."`);
}
make_shirt3(); // invoking function
