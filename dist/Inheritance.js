"use strict";
// ==============
// Classes with Interface
// ==================
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get Details() {
        return `${this.title} - $${this.price}`;
    }
    // format function from the interface
    format() {
        return `This menu item is called ${this.title} and is $${this.price}`;
    }
}
// inherites MenuItem Class
class Pizzas extends MenuItem {
    constructor(title, price) {
        super(title, price);
    }
}
const Pizza1 = new Pizzas("Marios Special", 100000);
function printMenuItems(item) {
    console.log(item.Details);
}
printMenuItems(Pizza1);
function printHasFormats(val) {
    console.log(val.format());
}
printHasFormats(Pizza1);
