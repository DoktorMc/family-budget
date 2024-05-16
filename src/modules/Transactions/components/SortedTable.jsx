import React, { useEffect } from "react";
import moment from "moment/moment";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoies } from "../../../store/slices/categorySlice";

const SortedTable = ({ dataT }) => {
  const groupedData = {};
  const groupTotalAmount = {};

  const datas = [...dataT].sort(
    (a, b) =>
      moment(a.transaction.date, "DD.MM.YY") -
      moment(b.transaction.date, "DD.MM.YY")
  );
  const dispatch = useDispatch();
  const dataCat = useSelector((state) => state.data.categories.categoryArray);
  useEffect(() => {
    dispatch(fetchCategoies());
  }, [dispatch]);

  const getNameCategory = (categoryID) => {
    for (let item of dataCat) {
      if (item.id === categoryID) {
        return item.name;
      }
    }
  };

  datas.forEach((item) => {
    if (!groupedData[item.transaction.date]) {
      groupedData[item.transaction.date] = [];
    }
    groupedData[item.transaction.date].push(item);
  });

  datas.forEach((item) => {
    if (!groupTotalAmount[item.transaction.date]) {
      groupTotalAmount[item.transaction.date] = [];
    }
    groupTotalAmount[item.transaction.date].push(item.transaction.amount);
  });

  const itemAmount = (item) => {
    let sum = groupTotalAmount[item].reduce(
      (acc, curr) => (Number(acc) + Number(curr)).toFixed(2),
      0
    );
    return sum;
  };

  const handleTableItemClick = (item) => {
    // e.preventDefault();
    console.log("Click to table item ", item);
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
              onClick={() => handleTableItemClick(item)}
            >
              <span>{getNameCategory(item.transaction.category)}</span>
              <span>{item.transaction.user}</span>
              <span>{item.transaction.note}</span>
              {!item.transaction.photo ? (
                <span>------</span>
              ) : (
                <span>{item.transaction.photo}</span>
              )}
              <span
                className={item.transaction.amount < 0 ? "expenses" : "income"}
              >
                {item.transaction.amount} USD
              </span>
            </div>
          ))}
          <div className="transaction-table__data__sorted-part__underline"></div>
        </div>
      ))}
    </div>
  );
};

export default SortedTable;
