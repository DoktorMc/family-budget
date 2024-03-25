import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "./../../../Custom/Button/CustomButton";
import { setProperty } from "../../../helper/setPropertyToNestedObj";
import { addTransactionToFirestore } from "../../../store/slices/transactionsSlice";
import { fetchCategoies } from "../../../store/slices/categorySlice";
import CustomSelector from "../../../Custom/Selector/CustomSelector";

const AddTransactionForm = ({ onCloseForm }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [negative, setNegative] = useState(null);
  const [transactionData, setTransactionData] = useState({
    date: "",
    note: "",
    amount: 0,
  });

  console.log("Transaction", transactionData);

  const dataCAT = useSelector((state) => state.data.categories.categoryArray);

  console.log("data", dataCAT);

  useEffect(() => {
    dispatch(fetchCategoies());
  }, [dispatch]);

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

  const OptionComponent = ({ onClick, ...props }) => {
    const { data } = props;
    return (
      <>
        <span onClick={() => onClick(data.id)}>{data.name}</span>
      </>
    );
  };

  const selectedComponent = (props) => {
    return <span>{props.name}</span>;
  };
  console.log("NEGATIVE", negative);
  const getSelectedItem = (id) => {
    console.log("CATEGORY", id);
    setTransactionData({ category: id });
    for (let item of dataCAT) {
      if (item.id === id) {
        if (item.type === "income") {
          setNegative(false);
        } else {
          setNegative(true);
        }
      }
    }
  };

  return (
    <form className="add-transaction" onSubmit={handleAddTransaction}>
      <div className="add-transaction__form">
        <div className="add-transaction__form__category">
          <label htmlFor="category">Category</label>
          <CustomSelector
            data={dataCAT}
            forGroup="type"
            options={OptionComponent}
            selected={selectedComponent}
            selectedData={(id) => getSelectedItem(id)}
          />
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
            placeholder={negative ? "-0.00" : "0.00"}
            max='0'
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
