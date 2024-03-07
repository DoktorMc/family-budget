import React from "react";
import CustomButton from "./../../../Custom/Button/CustomButton";
import doneCancelSprite from "./../../../img/done-cancel-sprite-ico.svg";

const EditCategoryForm = ({ categoryForEdit }) => {
  console.log("Item for edit category", categoryForEdit);

  const handleChange = () => {};

  return (
    <div className="edit__category__form">
      {/* <div className="manage-categories__table__items__list__item"> */}

      <div className="edit__category__form__items">
        <label htmlFor="edit_name_category">Name of category</label>
        <input
          className="edit__category__form__items__input-name"
          type="text"
          name="name"
          id="edit_name_category"
          defaultValue={categoryForEdit.category.name}
          onChange={handleChange}
        />
      </div>
      <div className="edit__category__form__buttons">
        <CustomButton
          title={
            <svg className="navbar-icon">
              <use xlinkHref={doneCancelSprite + "#done_white"} />
            </svg>
          }
          buttonTheme="edit"
          // handleProp={handleModalOpen}
        />
        <CustomButton
          title={
            <svg className="navbar-icon">
              <use xlinkHref={doneCancelSprite + "#close_white"} />
            </svg>
          }
          buttonTheme="delete"
          // handleProp={}
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default EditCategoryForm;
