"use strict";
const collectionOne = {
    data: ["Yoshi", "Ninja", "Mario"],
    name: "Ninja List"
};
const collectionTwo = {
    data: [20, 40, 10],
    name: "array of number"
};
function randomCollection(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const cOne = randomCollection(collectionOne);
const cTwo = randomCollection(collectionTwo);
console.log(cOne, cTwo);
