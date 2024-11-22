/**
* Abstract Classes 
* a class that can have properties and methods
* and can be inherited from by other classes
* but can never be used to make a NEW INSTANCE of that other class
 * 
 */

type Bases = "Classic" | "Thick" | "Thin" | "garlic"


interface HasFormeter{
    format(): string
}

// an ABSTRACT CLASS CANT BE INSTANTIATED
abstract class MenuItems implements HasFormeter {
    constructor(private title: string, private price: number) {
        
    }

     get Details(): string {
        return `${this.title} - $${this.price}`
    }

    // made format() an abstract method - methods that are ABSTRACT does not get implemented within the CLASS
    // we just define them as a way to emforce certain structures within CHILD  classes 
   abstract format(): string        //function signature
}


// inherites MenuItem Class
class Pizzass extends MenuItems {
    constructor(title: string, price: number) {
        super(title, price)
    }

    private base: Bases = 'Classic';
    private toppings: string[] = []


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



format(): string {

    let formatted = this.Details + "\n"

    // base
    formatted += `pizza on a ${this.base} base `

    // toppings
   if (this.toppings.length < 1 )
    {
        formatted += "with no toppings "
    }
    
    if (this.toppings.length > 0)
        {
            formatted += `with ${this.toppings.join(', ')}`
        
        }
        return formatted
}
}




const Pizzza1 = new Pizzass("Marios Special", 100000)

function printHasFormatss (val: HasFormeter): void {
    console.log(val.format())
} 

printHasFormatss(Pizzza1)