/**
 * Generic Class
 * Generic Constraints - To limit the number of data typea that is passed into a generic function, class, interfaces, type aliases etc
 * 
 */


interface HasID {
    id: number
}

// extending ID signifies a Generic Constraints
class DataCollection <T extends HasID> {
    constructor(private data: T[]) {
        
    }

    // load a specific value - which can be of any data type
    LoadOne(): T {
        const i = Math.floor(Math.random() * this.data.length)
        return this.data[i]
    }

    // load all values - i.e generic values
    LoiadAll (): T[] {
        return this.data
    }

    // add a single value (which can be of any Data type into the generic data array)
    add(val: T): T[] {
        this.data.push(val) // add a value to the array
        return this.data           // return the array after we have added a value - of any data type
    }

    deleteOne (id: number): void {
        this.data = this.data.filter(item => item.id !== id)
    }
}


interface DataUser {
    name: string
    score: number 
    id: number
}

const Userz = new DataCollection <DataUser> ([
{ name: "mario", score: 10, id: 1 },
{ name: "Yoshi", score: 100, id:2},
{ name: "Ninja", score: 120, id: 3}
])

console.log(Userz.add({name: "Uchenna", score: 1000, id: 5}))
Userz.deleteOne(5)

console.log("Load one -", Userz.LoadOne())
console.log("Load all -", Userz.LoiadAll())
