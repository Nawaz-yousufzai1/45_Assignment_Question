"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
39. City Names: Write a function called city_country() that takes in the name of a city and its country.
 The function should return a string formatted like this:

"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
*/
function city_country(city, country) {
    return `"${city}, ${country}"`;
}
const cityCountry = city_country("Lahore", "Pakistan");
console.log(cityCountry); // print Lahore, Pakistan
const cityCountry1 = city_country("Riaz", "Saudi Arabia");
console.log(cityCountry1); // print Riaz, Saudi Arabia
const cityCountry2 = city_country("Kairo", "Egypt");
console.log(cityCountry2);
