import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./../firebase-config";

const initialState = {};

export const addjunctionTransCateg = createAsyncThunk(
  "junction_transaction_category/addjunctionTransCateg",
  async (transactionID, categoryID) => {
    await setDoc(
      doc(
        db,
        "junction_transaction_category",
        `${transactionID}+'_'+${categoryID}`
      ),
      { transactionID: transactionID, categoryID: categoryID }
    );
  }
);

const junctionTransCategSlice = createSlice({
  name: "junction_transaction_category",
  initialState,
  reducers: {},
});

export const {} = junctionTransCategSlice.actions;

export default junctionTransCategSlice.reducer;
