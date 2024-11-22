"use strict";
/**
 * Generic Class
 * Generic Constraints - To limit the number of data typea that is passed into a generic function, class, interfaces, type aliases etc
 *
 */
// extending ID signifies a Generic Constraints
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    // load a specific value - which can be of any data type
    LoadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    // load all values - i.e generic values
    LoiadAll() {
        return this.data;
    }
    // add a single value (which can be of any Data type into the generic data array)
    add(val) {
        this.data.push(val); // add a value to the array
        return this.data; // return the array after we have added a value - of any data type
    }
    deleteOne(id) {
        this.data = this.data.filter(item => item.id !== id);
    }
}
const Userz = new DataCollection([
    { name: "mario", score: 10, id: 1 },
    { name: "Yoshi", score: 100, id: 2 },
    { name: "Ninja", score: 120, id: 3 }
]);
console.log(Userz.add({ name: "Uchenna", score: 1000, id: 5 }));
Userz.deleteOne(5);
console.log("Load one -", Userz.LoadOne());
console.log("Load all -", Userz.LoiadAll());
