"use strict";
// ExtendTypeAliase.ts
const personOne = {
    id: 1,
    name: "mario"
};
const personTwo = {
    id: "2",
    name: "Mario",
    email: "Mario@gmail.com"
};
const personThree = {
    email: "Mario@gmail.com"
};
function printuser(User) {
    console.log(User.id, User.email, User.name);
}
printuser(personTwo);
// printuser(personThree)
