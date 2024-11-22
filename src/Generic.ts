/**
 * Generics - gives us a way to make generic resuable structures
 * whether there are functions, classes or interfaces
 * which can be used by many diff data types
 * 
 * they gives us a way to pass these data types into those structures - almost like args  
 */



const Generic = <T> (val: T): T => {
    // console.log(val)
    return val
}

const resultOne = Generic <string> ("100")
const resultTwo = Generic <number> (100)
const bool = Generic <boolean> (true)


// example 2

function getRandomArrayValues <T> (values: T[]): T {
    
    return values[Math.floor(Math.random() * values.length)]
}


interface Userz {
    name: string
    score: number
}

const userz: Userz[] = [
{ name: "mario", score: 5},
{ name: "Yoshi", score: 100},
{ name: "Ninja", score: 120}
]

const usez = getRandomArrayValues <Userz> (userz);
console.log(usez)