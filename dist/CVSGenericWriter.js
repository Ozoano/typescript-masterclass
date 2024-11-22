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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CVSGenericWriter = void 0;
// import { appendFileSync } from "fs";
// use npm to instore type definition to allow us use file system packages
// npm init -Y  (to create a new package.json file)
// npm install -D @types/node  (to install the node definition)
class CVSGenericWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(",") + "\n";
    }
    addRows(values) {
        let rows = values.map((v) => this.formatRows(v));
        this.csv += rows.join("\n");
        console.log(this.csv);
    }
    formatRows(values) {
        let column = this.columns.map((col) => values[col]).join(",");
        return column;
    }
}
exports.CVSGenericWriter = CVSGenericWriter;
