import React from "react";
import moment from "moment/moment";

const SortedTable = ({ data }) => {
  const groupedData = {};
  const groupTotalAmount = {};
  
  const testData = data.map((item) =>( {
    ...item.transaction,
  }))

  console.log("testData", testData);
  const datas = testData.sort(
    (a, b) =>
      moment(a.date, "DD.MM.YY") -
      moment(b.date, "DD.MM.YY")
  );

  datas.forEach((item) => {
    if (!groupedData[item.date]) {
      groupedData[item.date] = [];
    }
    groupedData[item.date].push(item);
  });

  datas.forEach((item) => {
    if (!groupTotalAmount[item.date]) {
      groupTotalAmount[item.date] = [];
    }
    groupTotalAmount[item.date].push(item.amount);
  });

  const itemAmount = (item) => {
    let sum = groupTotalAmount[item].reduce((acc, curr) => acc + curr, 0);
    return sum;
  };

  return (
    <div className="transaction-table__data">
      {Object.keys(groupedData).map((date, index) => (
        <div className="transaction-table__data__sorted-part" key={index}>
          <div className="transaction-table__data__sorted-part__header">
            <h3>{date}</h3>
            {groupTotalAmount.date !== date ? (
              <span className="transaction-table__data__sorted-part__header__total-amount">
                {itemAmount(date)} USD
              </span>
            ) : (
              <span>???</span>
            )}
          </div>

          {groupedData[date].map((item) => (
            <div
              className="transaction-table__data__sorted-part__transaction-data"
              key={item.id}
            >
              <span>{item.category}</span>
              <span>{item.user}</span>
              <span>{item.note}</span>
              {!item.photo ? <span>------</span> : <span>{item.photo}</span>}
              <span>{item.amount} USD</span>
            </div>
          ))}
          <div className="transaction-table__data__sorted-part__underline"></div>
        </div>
      ))}
    </div>
  );
};

export default SortedTable;
