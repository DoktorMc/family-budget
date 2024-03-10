import React, { useState } from "react";
import arrow from "./expand_more.svg";

import "./CustomSelector.scss";
import { create } from "@mui/material/styles/createTransitions";
import GroupDataTable from "./GroupDataTable";

const genPaths = (o, p, target) => {
  p = p ?? "";

  const test = Object.keys(o).forEach((e) => {
    if (typeof o[e] === "object") {
      o[e] = genPaths(o[e], p + e + ".");
    } else {
      o[e] = p + e;
      console.log("FOR TARGET", target);
    }
  });

  console.log("O", test);

  // return o[target];
};

const groupByNestedProperty = (objects, propertyKey) =>{
  const groups = {};

  function group(obj, path = "") {
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        group(obj[key], path + "." + key);
      } else {
        const fullPath = (path === "" ? key : path + "." + key).slice(1);
        if (key === propertyKey) {
          const value = obj[key];
          if (!groups[value]) {
            groups[value] = [];
          }
          groups[value].push(obj);
        }
      }
    }
  }

  objects.forEach((obj) => group(obj));

  return groups;
}

//
const CustomSelector = ({ data, forGroup, displayName }) => {
  // const groupedData = {};
  const [selectedItem, setSelectedItem] = useState(null);

  const [isActive, setIsActive] = useState(false);

  console.log("TEST ITEM FOR SELECTED", data);
  const handleActive = () => {
    setIsActive(!isActive);
  };

  const groupedData = groupByNestedProperty(data, forGroup);

  console.log("TEST GROUP", groupedData);

  return (
    <div className="custom-selector">
      <div className="custom-selector__select">
        <span className="custom-selector__select__value">
          <img src="" alt="icon" />
        </span>
        <span className="custom-selector__select__arow">
          <svg
            className={`custom-selector__select__arow-svg ${
              isActive ? "rotate" : ""
            }`}
            onClick={handleActive}
          >
            <use xlinkHref={arrow + "#arrow"} />
          </svg>
        </span>
      </div>
      <div className={`custom-selector__options ${isActive ? "active" : ""}`}>
        {Object.keys(groupedData).map((data, index) => (
          <div key={index} className="custom-selector__options__table__items">
            <span className="custom-selector__options__table__items__title">
              {data} category
            </span>
            <GroupDataTable
              data={groupedData[data]}
              displayName={displayName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelector;
