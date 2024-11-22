"use strict";
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
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',') + "\n";
    }
    // to save the data in a csv file
    // saveFile(filename: string): void {
    //     appendFileSync(filename, this.csv)
    //     this.csv + "\n"
    //     console.log("File saved to", filename)
    // }
    addRows(values) {
        let rows = values.map(v => this.formatRows(v));
        this.csv += rows.join('\n');
        console.log(this.csv);
    }
    formatRows(p) {
        let column = this.columns.map(col => p[col]).join(',');
        return column;
    }
}
const Writer = new CSVWriter(["id", "amount", "to", "notes"]);
Writer.addRows([
    { id: 1, amount: 10, to: "Yoshi", notes: "learn TS" },
    { id: 2, amount: 100, to: "Mario", notes: "learn nextjs" }
]);
// Writer.saveFile('./data/payments.csv')
