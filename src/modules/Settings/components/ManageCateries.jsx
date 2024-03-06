import React, { useEffect } from "react";
import CategorySortedTable from "./CategorySortedTable";
import LoaderSpinCube from "../../../helper/loader/loaderSpinCube";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoies } from "../../../store/slices/categorySlice";



const ManageCateries = ({ data }) => {
  const groupedData = {};
  console.log("data", data);
  console.log("group data", groupedData);
  
  data.forEach((item) => {
    if (!groupedData[item.category.type]) {
      groupedData[item.category.type] = [];
    }
    groupedData[item.category.type].push(item);
  });

  return (
    <div className="manage-categories">
      <span className="manage-categories__title">Manage categories</span>
      <div className="manage-categories__table">
        {Object.keys(groupedData).map((data, index) => (
          <div key={index} className="manage-categories__table__items">
            <span className="manage-categories__table__items__title">
              {data} category
            </span>
            <CategorySortedTable categoryType={groupedData[data]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCateries;
