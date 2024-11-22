// ---------------
// Function signatures - describes the general structure of a type of function. Type of args to accept and return values
// ----------------

// we make a Function signatures  in two parts
// 1) describe the args
// 2) second define the return type


// Function signature created and stores as a TYPE ELIASE called CALCULATOR
// returns a number
type Calculator = (numOne: number, numTwo: number) => number

function addTwoNum(a:number, b: number) {
    return a + b
}

function MultipleTwoNum(first:number, second: number) {
    return first + second
}

function squareNum(num :number) {
    return num * num
}

function joinTwoNum(numOne: number, numTwo: number) {
    return `${numOne}${numTwo}`
}

// a var of type function Calculator
let calcs: Calculator[] = [];

calcs.push(addTwoNum)
calcs.push(MultipleTwoNum)
calcs.push(squareNum)

// ==============================================


// ---------------
// Function signatures on INTERFACES
// ----------------

interface HasArea {
    name: string

    // a function on interface
    calcArea (a: number): number
    // OR ---> calcArea: (a: number) => number
}

let SquareArea: HasArea = {
    name: "square area",
    calcArea (l: number){
        return l * l
    }
}

let Circle: HasArea = {
    name: "Circle area",
    calcArea (r: number) {
        return Math.PI * r^2
    }
}