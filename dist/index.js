"use strict";
let names = ['Mario', 'Ninja', 'Yoshi'];
let ages = [10, 120, 20];
let fruits = ['mango', 'orange', 'plantain'];
let items = [1, true, "good"];
let f = items[0];
// ==========================================================================
// ---------------
// Objects
// ----------------
let user = {
    firstname: "Ninja",
    age: 30,
    id: 1
};
user.firstname = "Ninja";
// ==========================================================================
// ---------------
// type interface with Object literals
// ----------------
let student = {
    firstname: "Ninja",
    age: 30,
    id: 1,
    score: 80
};
// ==========================================================================
// ---------------
// Functions
// ----------------
const addNumber = (items) => {
    const total = items.reduce((a, c) => a + c, 0);
    // return total
};
addNumber([1, 2, 5, 10]);
// ==========================================================================
// ---------------
// any type
// ----------------
let age;
age = 30;
age = false;
let title;
title = 30;
title = false;
title = {
    gender: "male",
    name: "ninja"
};
// ==========================================================================
// ---------------
// any type in arrays
// ----------------
let Arrays = [30, "title", false];
// ==========================================================================
// ---------------
// any type in functions
// ----------------
const AnyType = (values) => {
    return values + values;
};
const result = AnyType("Hello");
const resultNum = AnyType(10);
// ==========================================================================
// ---------------
// tuples - is similar to an array, but it arranges values accordingly
// ----------------
let person = ["ninja", 30, true];
// ---------------
// tuples exaples
// ----------------
let hsla;
hsla = [200, "100%", "50%", 1];
// ==========================================================================
// ---------------
// named tuples 
// ----------------
let users;
users = ["Ninja", 20];
const author1 = { name: "Ninja", avater: "/img/ninja.png" };
const author2 = { name: "mario", avater: "/img/mario.png" };
let blogs = {
    title: "Learn Typescript", body: "Full Course", id: 1,
    tags: ["Tech", "MERN"],
    createdAt: new Date(), author: author1
};
// ==========================================================================
// ---------------
// Interfaces as function atgs types
// ----------------
const createPost = (post) => {
    console.log(`created post ${post.title}, by ${post.author.name}`);
};
// createPost(blogs)
// ==========================================================================
// ---------------
// Interfaces with array
// ----------------
let post = [];
post.push(blogs);
const getRandonNum = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
};
const colorOne = getRandonNum();
const colorTwo = getRandonNum();
const userOne = { name: "Mario", score: 20 };
const UserOutput = (user) => {
    console.log(`User Details: ${user.name} has ${user.score} Score`);
};
// UserOutput(userOne)
// UserOutput({name: "ninja", score: 40})
// ==========================================================================
// ---------------
// Union types - a way to let ts know that a particular variable or value can be one of several diff types
// ----------------
let someId;
someId = 10;
someId = "Ninja";
let email;
email = "mario@gmail";
email = null;
let anotherId;
anotherId = "mario";
anotherId = 40;
// ==========================================================================
// ---------------
// Union type - pitfalls
// ----------------
// Function takes in args of a number or a string
// returns a numb or a string
// aim - to swap a vaue froma a string to a number
// if a number is passed, change it to a string
function swapTypes(id) {
    // func can only use props and methods that is commom to
    // both number and string types
    // parseInt(id) --> not allowed cos its only common to a number, and not a string
    parseInt("10");
    return id;
}
swapTypes("10");
function swapType(id) {
    if (typeof id === "string") {
        // here, we can use string methods
        return parseInt(id);
    }
    else {
        // here we can use number methods
        return id.toString();
    }
}
const IdOne = swapType("17");
const IdTwo = swapType(20);
let userDetails = { type: "user", userName: "Ozoano", email: " ozoano@gmail.com", id: 20 };
let personDetails = { type: "person", firstName: "uchenna", age: 30, id: 1 };
// NB: we cannot use TYPEOF on interfaces for type checking
// one wayto check them is by using TAGGED INTERFACE
// this basically means giving each INTERFACE  a COMMOM PROPERTY which is hard codded int the INTERFACE
const logDetails = (value) => {
    if (value.type === "user") {
        console.log(value.userName);
    }
    else {
        console.log(value.firstName);
    }
};
// logDetails(personDetails)
