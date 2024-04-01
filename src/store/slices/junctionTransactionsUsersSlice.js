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
import { db } from "../firebase-config";

const initialState = {};

export const addJunctionTranUser = createAsyncThunk(
  "junction_transaction_user/addjunctionTransactionsUsers",
  async (transactionID, userID) => {
  console.log('TEST ADD JUNCTION');
    await setDoc(
      doc(
        db,
        "junction_transaction_user",
        `${transactionID}+'_'+${userID}`
      ),
      { transactionID: transactionID, userID: userID }
    );
  }
);

const junctionTransactionsUsersSlice = createSlice({
  name: "junction_transaction_user",
  initialState,
  reducers: {},
});

export const {} = junctionTransactionsUsersSlice.actions;

export default junctionTransactionsUsersSlice.reducer;
