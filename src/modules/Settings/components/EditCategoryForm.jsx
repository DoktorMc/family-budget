import React from 'react';
import CustomButton from './../../../Custom/Button/CustomButton';
import doneCancelSprite from './../../../img/done-cancel-sprite-ico.svg'

const EditCategoryForm = ({ categoryForEdit }) => {
  console.log('Item for edit category', categoryForEdit);

  const handleChange = () => { }
  
  return (
    <div>
      <div className="manage-categories__table__items__list__item">
        <div>
          <label htmlFor="edit_name_category">Name</label>
          <input
            type="text"
            name="name"
            id="edit_name_category"
            value={categoryForEdit.category.name}
            onChange={handleChange}
          />
        </div>
        <div className="manage-categories__table__items__list__item__buttons">
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
      </div>
    </div>
  );
}

export default EditCategoryForm;
