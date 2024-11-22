// ---------------
// Extending INTERFACES
// ----------------

interface HasFormeter {
    format (): string
}


interface Bill extends HasFormeter {
    id: string | number
    amount: number
    servant: string
}


const User = {
    id: 1,
    format (): string  {
        return `This user has an id of ${this.id}`
    }
}


const Bill = {
    id: 2,
    amount: 50,
    servant: "Mario",
    format (): string {
        return `Bill with id ${this.id} has $${this.amount} to pay`
    }
}


const printUser = (val:HasFormeter): void => {
    console.log(val.format())
}


// function call
// printUser(User)
// printUser(Bill)


const PrintBill = (val: Bill): void => {
    console.log(val.id, val.amount)
}

// PrintBill(Bill)



