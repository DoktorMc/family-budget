import React, { useState, useEffect } from "react";
import SortedTable from "./SortedTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../../store/slices/transactionsSlice";
import LoaderSpinCube from "../../../helper/loader/loaderSpinCube";

const TableComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);
  
  const data = useSelector(
    (state) => state.data.transactions.transactionsArray
  );
  console.log("Transactions", data);
  return (
    <>
      {data ? (
        <div className="transaction-table">
          <SortedTable data={data} />
        </div>
      ) : (
        <LoaderSpinCube />
      )}
    </>
  );
};

export default TableComponent;
