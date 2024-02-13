import React from 'react';
import SortedTable from './SortedTable';
const operations = [
  {
    id: 1,
    date: "11.02.2024",
    category: "Transport",
    photo: null,
    note: "trolleybus",
    amount: -0.2,
  },

  {
    id: 2,
    date: "15.02.2024",
    category: "coffee",
    photo: null,
    note: "coffee",
    amount: -1.5,
  },
  {
    id: 3,
    date: "11.02.2024",
    category: "Salary",
    photo: null,
    note: "salary",
    amount: 3000,
  },
  {
    id: 2,
    date: "15.02.2024",
    category: "coffee",
    photo: null,
    note: "coffee",
    amount: -1.5,
  },
  {
    id: 2,
    date: "15.02.2024",
    category: "coffee",
    photo: null,
    note: "coffee",
    amount: -25.6,
  },
  {
    id: 2,
    date: "15.02.2024",
    category: "ssssss",
    photo: null,
    note: "sssss",
    amount: 324,
  },
];
const TableComponent = () => {

  return (
    <div className='transaction-table'>
      <SortedTable data={operations} />
    </div>
  );
}

export default TableComponent;
