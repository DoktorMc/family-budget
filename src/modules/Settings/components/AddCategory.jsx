import React from 'react';
import sprite from "../../../img/navbar.svg";
import Select, { components } from "react-select";

const { Option } = components;
const selectOptions = (props) => {
  <Option {...props}>
    <svg className="navbar-icon">
      <use xlinkHref={props.data.icon} />
    </svg>
    <span>{props.data.label}</span>
  </Option>
}

const options = [
  { label: "TEst 1", value: "1", icon: sprite + "#wallet" },
  { label: "TEst 2", value: "2", icon: sprite + "#dashboard" },
  { label: "TEst 3", value: "3", icon: sprite + "#settings" },
];

const AddCategory = () => {
  return (
    <div className="catgories-settings__add-categories">
      <h4>Create a new category</h4>
      <div className="catgories-settings__add-categories__items">
        <div className="catgories-settings__add-categories__items__item items-icon">
          <label htmlFor="icon">Icon</label>
          <Select options={options} components={{ selectOptions }} id="icon" />
          {/* <select name="icon" id="icon">
            <option value="value1">
              <div>
                <svg className="navbar-icon">
                  <use xlinkHref={sprite + "#wallet"} />
                </svg>
                <span>TEST</span>
              </div>
            </option>
            <option value="value2">Значение 2</option>
            <option value="value3">Значение 3</option>
          </select> */}
        </div>
        <div className="catgories-settings__add-categories__items__item items-colo">
          <label htmlFor="color">Color</label>
          <select name="color" id="color"></select>
        </div>
        <div className="catgories-settings__add-categories__items__item items-name">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="catgories-settings__add-categories__items__item items-type">
          <label htmlFor="type">Type</label>
          <select name="type" id="type"></select>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
