import React from "react";
import FilterByCategory from "./FilterByCategory";
import FilterByUser from "./FilterByUser";

const FiltersComponent = () => {
  return (
    <div className="transactions-filters">
      <p className="transactions-filters__title">Filters</p>
      <div className="transactions-filters__items">
        <FilterByCategory />
        <FilterByUser />
        <div className="transactions-filters__items-by_note">
          <label
            className="transactions-filters__items-by_note__title"
            htmlFor="search-transaction"
          >
            By note
          </label>
          <input
            className="transactions-filters__items-by_note__input"
            type="text"
            name="search-transaction"
            id="search-transaction"
          />
        </div>
      </div>
    </div>
  );
};

export default FiltersComponent;
