"use strict";
/**
 * Generics - gives us a way to make generic resuable structures
 * whether there are functions, classes or interfaces
 * which can be used by many diff data types
 *
 * they gives us a way to pass these data types into those structures - almost like args
 */
const Generic = (val) => {
    // console.log(val)
    return val;
};
const resultOne = Generic("100");
const resultTwo = Generic(100);
const bool = Generic(true);
// example 2
function getRandomArrayValues(values) {
    return values[Math.floor(Math.random() * values.length)];
}
const userz = [
    { name: "mario", score: 5 },
    { name: "Yoshi", score: 100 },
    { name: "Ninja", score: 120 }
];
const usez = getRandomArrayValues(userz);
console.log(usez);
