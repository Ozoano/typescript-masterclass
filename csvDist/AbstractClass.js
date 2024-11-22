"use strict";
/**
* Abstract Classes
* a class that can have properties and methods
* and can be inherited from by other classes
* but can never be used to make a NEW INSTANCE of that other class
 *
 */
class MenuItems {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get Details() {
        return `${this.title} - $${this.price}`;
    }
}
// inherites MenuItem Class
class Pizzass extends MenuItems {
    constructor(title, price) {
        super(title, price);
        this.base = 'Classic';
        this.toppings = [];
    }
    //    obj to add toppings
    addToppings(topping) {
        this.toppings.push(topping);
    }
    // remove toppings
    removeToppings(topping) {
        this.toppings = this.toppings.filter(t => t !== topping);
    }
    // select a base
    selectedBase(b) {
        this.base = b;
    }
    format() {
        let formatted = this.Details + "\n";
        // base
        formatted += `pizza on a ${this.base} base `;
        // toppings
        if (this.toppings.length < 1) {
            formatted += "with no toppings ";
        }
        if (this.toppings.length > 0) {
            formatted += `with ${this.toppings.join(', ')}`;
        }
        return formatted;
    }
}
const Pizzza1 = new Pizzass("Marios Special", 100000);
function printHasFormatss(val) {
    console.log(val.format());
}
printHasFormatss(Pizzza1);
