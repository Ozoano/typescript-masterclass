// ==============
// Classes with Interface
// ==================

interface HasFormeter{
    format(): string
}

class MenuItem implements HasFormeter {
    constructor(private title: string, private price: number) {
        
    }

     get Details(): string {
        return `${this.title} - $${this.price}`
    }

    // format function from the interface
    format(){
        return `This menu item is called ${this.title} and is $${this.price}`
    }
}


// inherites MenuItem Class
class Pizzas extends MenuItem {
    constructor(title: string, price: number) {
        super(title, price)
    }
}

const Pizza1 = new Pizzas("Marios Special", 100000)

function printMenuItems(item:MenuItem) {
    console.log(item.Details)
}

printMenuItems(Pizza1)

function printHasFormats (val: HasFormeter): void {
    console.log(val.format())
} 

printHasFormats(Pizza1)