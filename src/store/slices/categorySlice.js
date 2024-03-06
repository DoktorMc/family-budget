import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "./../firebase-config";

const initialState = {
  categoryArray: [],
};

// add category to firestore
export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (category) => {
    const addCategoryRef = await addDoc(
      collection(db, "Categories"),
      category
    );
    const newCategory = { id: addCategoryRef.id, category };
    return newCategory;
  }
);

// delete category from firebase colections 
export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (id) => {
    const category = await getDocs(collection(db, 'Categories'));
    for (let snap of category.docs) {
      if (snap.id === id) {
        await deleteDoc(doc(db,'Categories', snap.id));
      }
    }
    return id;
  }
)

// get all category from firestore
export const fetchCategoies = createAsyncThunk(
  'categories/fetchCategoies',
  async () => {
    const querySnapshot = await getDocs(collection(db, 'Categories'));
    const categories = querySnapshot.docs.map(doc => ({
      id: doc.id,
      category: doc.data(),
    }));
    return categories;
  }
)

const categorySlice = createSlice({
  name: "categories",
  initialState,
  // reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categoryArray.push(action.payload);
      })
      .addCase(fetchCategoies.fulfilled, (state, action) => { 
        state.categoryArray = action.payload;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => { 
        state.categoryArray = state.categoryArray.filter((category)=> category.id !== action.payload);
      })
  },
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;
