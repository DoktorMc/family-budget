import React, { useState } from "react";
import CustomButton from "./../../../Custom/Button/CustomButton";
import { setProperty } from "../../../helper/setPropertyToNestedObj";
import { useDispatch } from "react-redux";
import { addTransactionToFirestore } from "../../../store/slices/transactionsSlice";

const AddTransactionForm = ({ onCloseForm }) => {
  const dispatch = useDispatch();

  const [transactionData, setTransactionData] = useState({
    category: "",
    date: "",
    note: "",
    amount: 0,
  });

  console.log("Transaction", transactionData);

  const handleAddTransaction = (e) => {
    e.preventDefault();

    dispatch(addTransactionToFirestore(transactionData));
    onCloseForm();
  };

  const onImputChanges = (e) => {
    let { value, name } = e.target;

    if (name === "amount") {
      value = parseFloat(value);
    }

    setTransactionData(setProperty(transactionData, name, value));
  };

  return (
    <form className="add-transaction" onSubmit={handleAddTransaction}>
      <div className="add-transaction__form">
        <div className="add-transaction__form__category">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" onChange={onImputChanges}>
            <option disabled="disabled" selected="selected">
              Select category
            </option>

            <option value="value1">Значение 1</option>
            <option value="value2">Значение 2</option>
            <option value="value3">Значение 3</option>
          </select>
        </div>
        <div className="add-transaction__form__date">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" onChange={onImputChanges} />
        </div>
        <div className="add-transaction__form__note">
          <label htmlFor="note">Note (optional)</label>
          <input type="text" name="note" id="note" onChange={onImputChanges} />
        </div>
        <div className="add-transaction__form__amount">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            step="0.01"
            placeholder="0.00"
            onChange={onImputChanges}
          />
        </div>
      </div>
      <CustomButton
        type="submit"
        buttonTheme="add-button"
        title="Add transaction"
      />
    </form>
  );
};

export default AddTransactionForm;
