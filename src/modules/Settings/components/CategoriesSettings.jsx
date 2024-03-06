import React, { useEffect } from "react";
import AddCategory from "./AddCategory";
import ManageCateries from "./ManageCateries";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoies } from "../../../store/slices/categorySlice";
import "./CategorySettings.scss";
import LoaderSpinCube from "../../../helper/loader/loaderSpinCube";

const CategoriesSettings = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.categories.categoryArray);
  useEffect(() => {
    dispatch(fetchCategoies());
  }, [dispatch]);

  console.log("dat on settings", data);
  return (
    <>
      {data ? (
        <div className="catgories-settings">
          <AddCategory />
          <ManageCateries data={data} />
        </div>
      ) : (
        <LoaderSpinCube />
      )}
    </>
  );
};

export default CategoriesSettings;
