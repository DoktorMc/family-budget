import React from "react";

const GroupDataTable = ({ data, OptionComponent, selectedItem }) => {
  const hadleSelect = (id) => {
    return selectedItem(id);
  };
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
