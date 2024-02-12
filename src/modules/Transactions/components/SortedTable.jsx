import React, { useEffect, useState } from "react";
import moment from "moment/moment";

const SortedTable = ({ data }) => {
  const groupedData = {};
  const groupTotalAmount = {};
  console.log("Total Amount", groupTotalAmount);
  const datas = data.sort(
    (a, b) => moment(a.date, "DD.MM.YY") - moment(b.date, "DD.MM.YY")
  );

  datas.forEach((item) => {
    console.log("item: ", item);
    if (!groupedData[item.date]) {
      groupedData[item.date] = [];
      groupTotalAmount[item.date] = [];
    }
    groupedData[item.date].push(item);
    groupTotalAmount[item.date].push(item.amount);
  });

  console.log(
    "Group",
    Object.keys(groupedData).map((date , index) => date)
  );

  return (
    <div className="transaction-table__data">
      {Object.keys(groupedData).map(({date, amount}, index) => (
        <div className="transaction-table__data-sorted_part" key={index}>
          <div className="transaction-table__data-sorted_part__header">
            <h3>{date}</h3>
            <span>{}</span>;
          </div>

          {groupedData[date].map((item) => (
            <div
              className="transaction-table__data-sorted_part__transaction-data"
              key={item.id}
            >
              <span>{item.category}</span>
              <span>{item.note}</span>
              {!item.photo ? <span>------</span> : <span>{item.photo}</span>}
              <span>{item.amount}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SortedTable;
