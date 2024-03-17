import React from "react";

const GroupDataTable = ({ data, isGroup, OptionComponent, selectedItem }) => {

  const hadleSelect = (id) => {
    console.log('ID SELECTED', id);
    data.map((item) => {
     console.log('ITEM SELECTED', item);
      if (item.id === id) {
        return selectedItem(item);
      } else return null;
    });
  };
  console.log("DATA IN TABLE", data);
  return (
    <div className="custom-selector__options__items__list">
      {/* {isGroup ? ( */}
          {data.map((item) => {
            return (
              <OptionComponent
                key={item.id}
                data={item}
                onClick={(id) => hadleSelect(id)}
              />
            );
          })}
    </div>
  );
};

export default GroupDataTable;
