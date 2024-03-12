import React, { useState, useEffect } from "react";
import arrow from "./expand_more.svg";

import "./CustomSelector.scss";
import GroupDataTable from "./GroupDataTable";

const groupByNestedProperty = (objects, propertyKey) => {
  const groups = {};

  const group = (obj, path = "") => {
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
  };

  objects.forEach((obj) => group(obj));

  return groups;
};

//
const CustomSelector = ({ data, forGroup, options }) => {
  // const [selectedItem, setSelectedItem] = useState(null);
  const [isGroup, setIsGroup] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive);
  };
  let groupedData = {};

  useEffect(() => {
    if (forGroup) {
      setIsGroup(true);
    }
  }, [forGroup]);

  if (forGroup) {
    groupedData = groupByNestedProperty(data, forGroup);
  } else {
    groupedData = data;
  }

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
          <>
            {isGroup ? (
              <div
                key={index}
                className="custom-selector__options__table__items"
              >
                <span className="custom-selector__options__table__items__title">
                  {data} category
                </span>
                <GroupDataTable
                  data={groupedData[data]}
                  OptionComponent={options}
                  isGroup={isGroup}
                />
              </div>
            ) : (
              <GroupDataTable
                data={groupedData[data]}
                OptionComponent={options}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default CustomSelector;
