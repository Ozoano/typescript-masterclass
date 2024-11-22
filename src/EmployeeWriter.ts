import { CVSGenericWriter } from "./CVSGenericWriter";

interface Employee {
  name: string;
  id: number;
  location: string;
  status: string;
  gender: string;
}

const Employees = new CVSGenericWriter<Employee>([
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
