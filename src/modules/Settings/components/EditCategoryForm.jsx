import React, { useState } from "react";
import CustomButton from "./../../../Custom/Button/CustomButton";
import doneCancelSprite from "./../../../img/done-cancel-sprite-ico.svg";
import { setProperty } from "../../../helper/setPropertyToNestedObj";
import { useDispatch } from "react-redux";
import { editCategory } from "../../../store/slices/categorySlice";

const EditCategoryForm = ({ categoryForEdit, closeModal }) => {
  const dispatch = useDispatch();
  const [newNameCategory, setNewNameCategory] = useState('');

  console.log("Item for edit category", categoryForEdit);

  const handleChange = (e) => { 
    e.preventDefault();
    console.log('new name category', newNameCategory);
    dispatch(editCategory({ id: categoryForEdit.id, name: newNameCategory}));
    closeModal();
  };


  const onImputChanges = (e) => {
    setNewNameCategory(e.target.value);
  };
  
  const handleCloseModal = () => { 
    closeModal()
  }
  return (
    <form className="edit__category__form" onSubmit={handleChange}>
      {/* <div className="manage-categories__table__items__list__item"> */}

      <div className="edit__category__form__items">
        <label htmlFor="edit_name_category">Name of category</label>
        <input
          className="edit__category__form__items__input-name"
          type="text"
          name="name"
          id="edit_name_category"
          // value={newNameCategory}
          defaultValue={categoryForEdit.category.name}
          onChange={onImputChanges}
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
          type="onSubmit"
        />
        <CustomButton
          title={
            <svg className="navbar-icon">
              <use xlinkHref={doneCancelSprite + "#close_white"} />
            </svg>
          }
          buttonTheme="delete"
          handleProp={handleCloseModal}
        />
      </div>
      {/* </div> */}
    </form>
  );
};

export default EditCategoryForm;
