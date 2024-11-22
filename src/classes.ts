type Base = "Classic" | "Thick" | "Thin" | "garlic"


// PRIVATE & PUBLIC are referred to as ACTION MODIFIERS in CLASS 


class Pizza  {
    constructor (private title: string, private price: number){

       
    }

//    private title: string
//    private price: number
   private base: Base = "Classic"
   private toppings: string [] = []

//    obj to add toppings
addToppings (topping: string): void {
    this.toppings.push(topping)
}

// remove toppings
removeToppings (topping: string): void {
    this.toppings = this.toppings.filter(t => t !== topping)
}

// select a base
selectedBase (b: Base): void {
    this.base = b
}
}

// an instance of the Pizza Class
const pizzaaa = new Pizza ( "Marios special", 100)
const pizzaa = new Pizza ( "Ninjas special", 10)


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