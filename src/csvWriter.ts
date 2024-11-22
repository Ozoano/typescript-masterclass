/**
 * CSV WRITER Class - Takes in an array of data object, and turn it into a CSV file
 * 
 * these obj are specific, they are defined using a Payment INTERFACE
 * 
 * Addrow() - the array of obj is sent into the CSV WRITER using a CLASS METHOD - AddRow().
 * within, the method, each obj is formatted into its own CSV row
 * each obj reps a diff  row in the CS File
 * 
 * AddRow([{}, {}, {}]){
 * * Format each row
 * * "mario, Yoshi, 50, Typescript Course"
 * }
 */

// import { appendFileSync } from "fs";
// use npm to instore type definition to allow us use file system packages
// npm init -Y  (to create a new package.json file)
// npm install -D @types/node  (to install the node definition)

interface Payment {
    id: number
    amount: number
    to: string
    notes: string
}

type paymentColumn = ("id" | "amount" | "to" | "notes")[]

class CSVWriter {
    constructor(private columns: paymentColumn) {
        this.csv = this.columns.join(',') + "\n"
    }

    private csv: string

    // to save the data in a csv file
    // saveFile(filename: string): void {
    //     appendFileSync(filename, this.csv)
    //     this.csv + "\n"

    //     console.log("File saved to", filename)
    // }


    addRows (values: Payment[]): void
    {
        let rows = values.map(v => this.formatRows(v));
        this.csv += rows.join('\n')

        console.log(this.csv)
    }

    formatRows (p: Payment): string {
        let column = this.columns.map(col => p[col]).join(',')
        return column; 
    }
}

const Writer =  new CSVWriter (["id", "amount", "to", "notes"])


Writer.addRows([
    {id: 1, amount: 10, to: "Yoshi", notes: "learn TS"},
    {id: 2, amount: 100, to: "Mario", notes: "learn nextjs"}

])

// Writer.saveFile('./data/payments.csv')