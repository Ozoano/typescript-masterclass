"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CVSGenericWriter_1 = require("./CVSGenericWriter");
const Employees = new CVSGenericWriter_1.CVSGenericWriter([
    "name",
    "id",
    "location",
    "status",
    "gender",
]);
Employees.addRows([
    {
        name: "mario",
        id: 1,
        location: "Lagos",
        status: "Manager",
        gender: "Male",
    },
    {
        name: "Yoshi",
        id: 2,
        location: "Benin",
        status: "Snr Mgs",
        gender: "Female",
    },
    { name: "mario", id: 1, location: "Lagos", status: "Staff", gender: "Male" },
]);
