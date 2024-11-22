import { CVSGenericWriter } from './CVSGenericWriter'

interface Payment {
    id: number
    amount: number
    to: string
    notes: string
}


const PaymentWriter =  new CVSGenericWriter <Payment> (["id", "amount", "to", "notes"])


PaymentWriter.addRows([
    {id: 1, amount: 10, to: "Yoshi", notes: "learn TS"},
    {id: 2, amount: 100, to: "Mario", notes: "learn nextjs"},
    {id: 3, amount: 10, to: "Mario", notes: "learn nodejs"}

])

// Writer.saveFile('./data/payments.csv')