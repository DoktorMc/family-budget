import React, { useState, useEffect } from "react";
import SortedTable from "./SortedTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../../store/slices/transactionsSlice";
import LoaderSpinCube from "../../../helper/loader/loaderSpinCube";
import { fetchCategoies } from "../../../store/slices/categorySlice";

const TableComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
      dispatch(fetchCategoies()); 
  }, [dispatch]);
  
  const dataTrans = useSelector(
    (state) => state.data.transactions.transactionsArray
  );
  console.log("Transactions", dataTrans);
  return (
    <>
      {dataTrans ? (
        <div className="transaction-table">
          <SortedTable dataT={dataTrans} />
        </div>
      ) : (
        <LoaderSpinCube />
      )}
    </>
  );
};

export default TableComponent;
