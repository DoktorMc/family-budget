import React from "react";
import SortedTable from "./SortedTable";
const operations = [
  {
    id: 1,
    date: "11.02.2024",
    category: "Transport",
    user: "USER",
    photo: null,
    note: "trolleybus",
    amount: -0.2,
  },
  {
    id: 2,
    date: "15.02.2024",
    category: "coffee",
    user: "USER",
    photo: null,
    note: "coffee",
    amount: -1.5,
  },
  {
    id: 3,
    date: "11.02.2024",
    category: "Salary",
    user: "USER",
    photo: null,
    note: "salary",
    amount: 3000,
  },
  {
    id: 4,
    date: "15.02.2024",
    category: "coffee",
    user: "USER",
    photo: null,
    note: "coffee",
    amount: -1.5,
  },
  {
    id: 5,
    date: "15.02.2024",
    category: "coffee",
    user: "USER",
    photo: null,
    note: "coffee",
    amount: -25.6,
  },
  {
    id: 6,
    date: "17.02.2024",
    category: "coffee",
    user: "USER",
    photo: null,
    note: "coffee",
    amount: -25.6,
  },
  {
    id: 7,
    date: "15.02.2024",
    category: "ssssss",
    user: "USER",
    photo: null,
    note: "sssss",
    amount: 324,
  },
  {
    id: 8,
    date: "17.02.2024",
    category: "coffee",
    user: "USER",
    photo: null,
    note: "coffee",
    amount: -25.6,
  },
  {
    id: 9,
    date: "17.02.2024",
    category: "coffee",
    user: "USER",
    photo: null,
    note: "coffee",
    amount: -25.6,
  },
];
const TableComponent = () => {
  return (
    <div className="transaction-table">
      <SortedTable data={operations} />
    </div>
  );
};

export default TableComponent;
