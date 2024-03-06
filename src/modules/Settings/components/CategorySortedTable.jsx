import React, { useState } from "react";
import CustomButton from "./../../../Custom/Button/CustomButton";
import buttonSprite from "../../../img/delete-edit-sprite.svg";
import { deleteCategory } from "../../../store/slices/categorySlice";
import { useDispatch } from "react-redux";
import Modal from "./../../../Custom/Modal/Modal/Modal";
import EditCategoryForm from "./EditCategoryForm";

const CategorySortedTable = ({ categoryType }) => {
  const [isModalActive, setModalActive] = useState(false);
  const [categoryForEdit, setCategoryForEdit] = useState(null);

  const handleModalOpen = (item) => {
    setCategoryForEdit(item);
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

  const dispatch = useDispatch();

  const handleCategoryDelete = (id) => {
    dispatch(deleteCategory(id));
  };

  return (
    <div className="manage-categories__table__items__list">
      <div>
        {isModalActive && (
          <Modal title="some modal title" onClose={handleModalClose}>
            <EditCategoryForm categoryForEdit={categoryForEdit} />
          </Modal>
        )}
      </div>
      {categoryType.map((item, index) => (
        <div
          key={item.id}
          className="manage-categories__table__items__list__item"
        >
          <span>{item.category.name}</span>

          <div className="manage-categories__table__items__list__item__buttons">
            <CustomButton
              title={
                <svg className="navbar-icon">
                  <use xlinkHref={buttonSprite + "#edit_white"} />
                </svg>
              }
              buttonTheme="edit"
              handleProp={() => handleModalOpen(item)}
            />
            <CustomButton
              title={
                <svg className="navbar-icon">
                  <use xlinkHref={buttonSprite + "#delete_white"} />
                </svg>
              }
              buttonTheme="delete"
              handleProp={() => handleCategoryDelete(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySortedTable;
