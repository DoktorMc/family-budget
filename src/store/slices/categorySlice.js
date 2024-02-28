import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./../firebase-config";

const initialState = {
  categoryArray: [],
};

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (categories) => {
    const addCategoryRef = await addDoc(
      collection(db, "categories"),
      categories
    );
    const newCategory = { id: addCategoryRef.id, categories };
    return newCategory;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCategory.fulfilled, (state, action) => {
      state.categoryArray.push(action.payload);
    });
  },
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;
