import React from 'react';

const FilterByCategory = () => {
  return (
    <div className="transactions-filters__items-by_category">
      <span className="transactions-filters__items-by_category__title">
        By category
      </span>
      <div className="transactions-filters__items-by_category__selector">
        <span className="transactions-filters__items-by_category__selector-left_part">
          <span className="transactions-filters__items-by_category__selector-left_part__icon">
            2
          </span>
          <span className="transactions-filters__items-by_category__selector-left_part__value">
            All categories
          </span>
        </span>
        <span className="transactions-filters__items-by_category__selector-right_part">
          {">"}
        </span>
      </div>
    </div>
  );
}

export default FilterByCategory;
