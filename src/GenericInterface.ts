interface Collection <T> {
    data: T[]
    name: string
}

const collectionOne: Collection <string> = {
    data: ["Yoshi", "Ninja", "Mario"],
    name: "Ninja List"
} 

const collectionTwo: Collection <number> = {
    data: [20, 40, 10],
    name: "array of number"
}

function randomCollection <T> (c: Collection<T>): T {
    const i = Math.floor(Math.random() * c.data.length)
    return c.data[i]
}

const cOne = randomCollection <string> (collectionOne)
const cTwo = randomCollection(collectionTwo)


console.log(cOne, cTwo)