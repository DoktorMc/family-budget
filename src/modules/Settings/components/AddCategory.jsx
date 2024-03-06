import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../store/slices/categorySlice";
import { setProperty } from "./../../../helper/setPropertyToNestedObj";
import CustomButton from "../../../Custom/Button/CustomButton";

const AddCategory = () => {
  const dispatch = useDispatch();

  const [categoryData, setCategoryData] = useState({
    name: "",
    type: "",
  });

  const handleAddCategory = (e) => {
    e.preventDefault();

    dispatch(addCategory(categoryData));
    setCategoryData({ name: "", type: "" });
  };

  const onImputChanges = (e) => {
    let { value, name } = e.target;

    setCategoryData(setProperty(categoryData, name, value));
  };

  console.log("category data", categoryData);

  return (
    <div className="catgories-settings__add-categories">
      <span className="catgories-settings__add-categories__title">
        Create a new category
      </span>
      <form
        className="catgories-settings__add-categories__items"
        onSubmit={handleAddCategory}
      >
        <div className="catgories-settings__add-categories__items__item items-name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={categoryData.name}
            placeholder="Enter name of category..."
            onChange={onImputChanges}
          />
        </div>
        <div className="catgories-settings__add-categories__items__item items-type">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            value={categoryData.type}
            onChange={onImputChanges}
          >
            <option value="" disabled="disabled" selected="selected">
              Select type...
            </option>

            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <CustomButton
          title="Add"
          type="submit"
          buttonTheme="add-category-button"
        />
      </form>
    </div>
  );
};

export default AddCategory;
