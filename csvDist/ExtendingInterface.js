"use strict";
// ---------------
// Extending INTERFACES
// ----------------
const User = {
    id: 1,
    format() {
        return `This user has an id of ${this.id}`;
    }
};
const Bill = {
    id: 2,
    amount: 50,
    servant: "Mario",
    format() {
        return `Bill with id ${this.id} has $${this.amount} to pay`;
    }
};
const printUser = (val) => {
    console.log(val.format());
};
// function call
printUser(User);
printUser(Bill);
const PrintBill = (val) => {
    console.log(val.id, val.amount);
};
PrintBill(Bill);
