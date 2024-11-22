"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CVSGenericWriter_1 = require("./CVSGenericWriter");
const PaymentWriter = new CVSGenericWriter_1.CVSGenericWriter(["id", "amount", "to", "notes"]);
PaymentWriter.addRows([
    { id: 1, amount: 10, to: "Yoshi", notes: "learn TS" },
    { id: 2, amount: 100, to: "Mario", notes: "learn nextjs" },
    { id: 3, amount: 10, to: "Mario", notes: "learn nodejs" }
]);
// Writer.saveFile('./data/payments.csv')
