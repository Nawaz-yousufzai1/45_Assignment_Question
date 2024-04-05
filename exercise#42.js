"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians
 by adding the phrase the Great to each magician’s name. Call show_magicians()
 to see that the list has actually been modified.
 */
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
function make_great(magicians) {
    return magicians.map(magician => `The Great ${magician}`);
}
// Array of magician's names
let magicianNames = ["john", "paol", "Martino"];
// Call make_great function to modify the magician names
magicianNames = make_great(magicianNames);
// Call the function to display  names
show_magicians(magicianNames);
