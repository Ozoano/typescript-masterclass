"use strict";
// PRIVATE & PUBLIC are referred to as ACTION MODIFIERS in CLASS 
class Pizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        //    private title: string
        //    private price: number
        this.base = "Classic";
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
}
// an instance of the Pizza Class
const pizzaaa = new Pizza("Marios special", 100);
const pizzaa = new Pizza("Ninjas special", 10);
// pizzaa.selectedBase("garlic")
// pizzaaa.addToppings("Olives")
// pizzaa.addToppings("mushrooms")
// pizza.removeToppings("Olives")
// console.log(pizza)
// function addMushroomsToPizza(pizzas: Pizza[]): void {
//     pizzas.forEach(pizza => {
//         pizza.addToppings("Mushrooms")
//     });
// }
// addMushroomsToPizza([pizzaaa, pizzaa])
// console.log(pizzaaa, pizzaa)
