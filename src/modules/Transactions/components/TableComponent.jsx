import React, { useState, useEffect } from "react";
import SortedTable from "./SortedTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../../store/slices/transactionsSlice";

const TableComponent = () => {
  const [transactions, setTransactions] = useState([]);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data.transactions.transactionsArray);
  // console.log("Transactions", data);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <div className="transaction-table">
      <SortedTable data={data} />
    </div>
  );
};

export default TableComponent;
