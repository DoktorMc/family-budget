import React from "react";

const GroupDataTable = ({ data, isGroup, OptionComponent }) => {
  return (
    <div className="custom-selector__options__table__items__group">
      {isGroup ? (
        <>
          {data.map((item) => { return(<OptionComponent data={item} />)}
          )}
        </>
      ) : (
        <OptionComponent data={data} />
      )}
    </div>
  );
};

export default GroupDataTable;
