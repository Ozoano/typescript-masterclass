"use strict";
// ---------------
// Function signatures - describes the general structure of a type of function. Type of args to accept and return values
// ----------------
function addTwoNum(a, b) {
    return a + b;
}
function MultipleTwoNum(first, second) {
    return first + second;
}
function squareNum(num) {
    return num * num;
}
function joinTwoNum(numOne, numTwo) {
    return `${numOne}${numTwo}`;
}
// a var of type function Calculator
let calcs = [];
calcs.push(addTwoNum);
calcs.push(MultipleTwoNum);
calcs.push(squareNum);
let SquareArea = {
    name: "square area",
    calcArea(l) {
        return l * l;
    }
};
let Circle = {
    name: "Circle area",
    calcArea(r) {
        return Math.PI * r ^ 2;
    }
};
