"use strict";
const Uzers = new Set();
const uzer1 = { email: "ozoanoobi@gmail.com", score: 100 };
const uzer2 = { email: "ozoanoobi@gmail.com", score: 100 };
Uzers.add(uzer1);
Uzers.add(uzer2);
// console.log(uzers);
function LogEmail(uzer) {
    Uzers.forEach((user) => {
        console.log(user.email);
    });
}
LogEmail(Uzers);
