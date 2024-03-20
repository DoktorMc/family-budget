import React from "react";
import CategorySortedTable from "./CategorySortedTable";


const ManageCateries = ({ data}) => {
  const groupedData = {};
  console.log("data", data);
  console.log("group data", groupedData);
  
  data.forEach((item) => {
    if (!groupedData[item.type]) {
      groupedData[item.type] = [];
    }
    groupedData[item.type].push(item);
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
