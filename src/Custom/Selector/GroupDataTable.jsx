import React from "react";

const GroupDataTable = ({ data, OptionComponent, selectedItem }) => {
  const hadleSelect = (id) => {
    console.log("ID SELECTED", id);

    return selectedItem(id);
  };

  console.log("DATA IN TABLE", data);
  return (
    <div className="custom-selector__options__items__list">
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
