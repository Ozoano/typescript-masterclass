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
        // pass the array of strings into the csv, and separate it by ','
        this.csv = this.columns.join(',') + '\n';
    }
    // func takes in an array of obj - the Payment Obj
    // result: ['1, 50, mario, learn ts', '12, 10, mario, learn ts']
    addRow(values) {
        let rows = values.map(v => this.formatRow(v));
        this.csv += rows.join('\n');
        console.log(this.csv);
    }
    // private func that returns a string
    // takes in an obj of Payment
    // map the column and comapare it with objs inside the Payment obj
    // p[col] - takes the obj p, and finds the property on the obj based on the col items. 
    // And it will return a new array with all of the values - like: ['1, 50, mario, learn ts'] with the join(',')
    formatRow(p) {
        return this.columns.map(col => p[col]).join(',');
    }
}
// csv instance
const writer = new CSVWriter(["id", "amount", "to", "notes"]);
writer.addRow([
    { id: 1, amount: 100, to: "yoshi", notes: "learn Ts" },
    { id: 2, amount: 90, to: "mario", notes: "learn Nextjs" }
]);
