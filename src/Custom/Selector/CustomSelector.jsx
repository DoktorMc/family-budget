import React, { useState, useEffect } from "react";
import arrow from "./expand_more.svg";

import "./CustomSelector.scss";
import GroupDataTable from "./GroupDataTable";
import TabNavItem from "../TabNav/TabNavItem";
import TabContent from "../TabNav/TabContent";

const groupByNestedProperty = (objects, propertyKey) => {
  const groups = [];
  let value = [];
  console.log("OBJ IN GROUP", objects);
  const group = (obj, path = "") => {
    for (const key in obj) { 
      if (typeof obj[key] === "object" && obj[key] !== null) {
        group(obj[key], path + "." + key);
      
      } else if (key === propertyKey) {
        value = obj[key];
        if (!groups[value]) {
         groups[value] = [];
        }   
        groups[value].push(obj);
      } 
    }
  };
  objects.forEach((obj) => group(obj));

  return groups;
};

const groupByNestedProperty1 = (objects, nestedKey) => {
  const groups = [];

 const traverse = (obj, parent) => {
    if (typeof obj === "object" && obj !== null) {
      if (nestedKey in obj) {
        const value = obj[nestedKey];
        if (!groups[value]) {
          groups[value] = [];
        }
        groups[value].push(parent);
      }
      for (const key in obj) {
        traverse(obj[key], obj);
      }
    }
  }

  objects.forEach((obj) => traverse(obj, obj));

  return groups;
}

const getPathSelectedItem = (objects, selectedItemKey) => {
  console.log("OBJ IN SELECTED", objects);
  const pathItems = [];
  let value = [];
  let fullPath = "";
  const group = (obj, path = "") => {
    console.log("OBJ", obj);
    for (const key in obj) {
      console.log("KEY", key);
      if (typeof obj[key] === "object" && obj[key] !== null) {
        group(obj[key], path + "." + key);
      } else {
        fullPath = path === "" ? key : (path + "." + key).slice(1);
        console.log("PATH 2", fullPath);
        if (key === selectedItemKey) {
          value = obj[key];
          if (!pathItems[value]) {
            pathItems[value] = [];
          }
          pathItems[value].push(fullPath);
        }
        console.log("VALUE", value);
      }
    }
  };

  group(objects);

  return pathItems;
};

//
const CustomSelector = ({
  data,
  forGroup,
  options,
  selected,
  selectedData,
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isGroup, setIsGroup] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeTab, setActiveTab] = useState("tab0");
  const handleActive = () => {
    setIsActive(!isActive);
  };
  let groupedData = {};
  
  console.log('DATA', data);

  useEffect(() => {
    if (forGroup) {
      setIsGroup(true);
    }
  }, [forGroup]);

  if (forGroup) {
    groupedData = groupByNestedProperty1(data, forGroup);
  } else {
    groupedData = data;
  }

  const handleSetSelected = (id) => {
    setSelectedItem(data.reduce((item) => {
      if (item.id === id) { 
        return item;
      }
    }));
    selectedData(id);
    setIsActive(!isActive);
  };

  console.log("GROUP DATA", groupedData);
  console.log("SELECTED IETM", selectedItem);
  return (
    <div className="custom-selector">
      <div className="custom-selector__select">
        <div className="custom-selector__select__value">
          {selectedItem !== null ? selected(selectedItem) : null}
        </div>
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
        {isGroup ? (
          <>
            <ul className="custom-selector__options__tab-nav">
              {Object.keys(groupedData).map((data, index) => (
                <TabNavItem
                  key={index}
                  id={`tab${index}`}
                  title={data}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              ))}
            </ul>
            <div className="custom-selector__options__outlet">
              {Object.keys(groupedData).map((data, index) => (
                <TabContent id={`tab${index}`} activeTab={activeTab}>
                  <GroupDataTable
                    data={groupedData[data]}
                    OptionComponent={options}
                    isGroup={isGroup}
                    selectedItem={(item) => handleSetSelected(item)}
                  />
                </TabContent>
              ))}
            </div>
          </>
        ) : (
          <GroupDataTable
            data={groupedData}
            OptionComponent={options}
            selectedItem={(item) => handleSetSelected(item)}
          />
        )}
      </div>
    </div>
  );
};

export default CustomSelector;
