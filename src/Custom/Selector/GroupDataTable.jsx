import React from 'react';

const GroupDataTable = ({ data, displayName }) => {
  console.log('DATA SORTED', data);
  return (
    <div className="custom-selector__options__table__items__group">
      {data.map((item, index) => (
        <div
          key={index}
          className="custom-selector__options__table__items__group-item"
        >
          <span>{item[displayName]}</span>
        </div>
      ))}
    </div>
  );
}

export default GroupDataTable;
