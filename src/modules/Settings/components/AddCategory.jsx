import React from "react";
import sprite from "../../../img/navbar.svg";
import Select, { components } from "react-select";
// import icon from "family-budget-3404f.appspot.com/categories_icon/account.png";
// import { icon } from 'gs://family-budget-3404f.appspot.com/categories_icon/account.png';

// const { Option } = components;
// const selectOptions = (props) => {
//   console.log("props", props);
//   <Option {...props}>
//     {/* <svg className="navbar-icon">
//       <use xlinkHref={sprite + props.data.icon} />
//     </svg> */}
//   </Option>;
// };

const Control = ({ children, ...props }) => (
  <components.Control {...props}>
    <span>{props.data.label}</span>
  </components.Control>
);

const Option = (props) => {
  return (
    <div
      style={{
        padding: "2px",
        display: "flex",
        border: "1px solid",
        justifyContent: "space-between",
      }}
    > 
      <components.Option {...props}>
       <img
          src={props.data.icon}
          alt={props.data.icon}
          width="24px"
          height="24px"
        />
      </components.Option>
    </div>
  );
};
const options = [
  {
    label: "TEst 1",
    value: "1",
    icon: "https://firebasestorage.googleapis.com/v0/b/family-budget-3404f.appspot.com/o/categories_icon%2Faccount.png?alt=media&token=9266e01e-41a0-42f3-8b1f-d28f2f7b9186",
  },
  {
    label: "TEst 2",
    value: "2",
    icon: "https://firebasestorage.googleapis.com/v0/b/family-budget-3404f.appspot.com/o/categories_icon%2Faccount.png?alt=media&token=9266e01e-41a0-42f3-8b1f-d28f2f7b9186",
  },
];

const AddCategory = () => {
  return (
    <div className="catgories-settings__add-categories">
      <h4>Create a new category</h4>
      <div className="catgories-settings__add-categories__items">
        <div className="catgories-settings__add-categories__items__item items-icon">
          <label htmlFor="icon">Icon</label>
          <Select options={options} components={{ Option }} id="icon" />

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
};

export default AddCategory;
