import React from "react";

const FilterByUser = () => {
  return (
    <div className="transactions-filters__items-by_user">
      <span className="transactions-filters__items-by_user__title">
        By user
      </span>
      <div className="transactions-filters__items-by_user__selector">
        <span className="transactions-filters__items-by_user__selector-left_part">
          <span className="transactions-filters__items-by_user__selector-left_part__icon">
            user icon
          </span>
          <span className="transactions-filters__items-by_user__selector-left_part__value">
            user name
          </span>
        </span>
        <span className="transactions-filters__items-by_user__selector-right_part">
          {">"}
        </span>
      </div>
    </div>
  );
};

export default FilterByUser;
