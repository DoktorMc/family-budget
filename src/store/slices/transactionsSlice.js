import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "./../firebase-config";
import { useDispatch } from "react-redux";
import { addjunctionTransCateg } from "./junctionTransCategSlice";

const initialState = {
  transactionsArray: [],
};

//add transaction to the firestore
export const addTransactionToFirestore = createAsyncThunk(
  "transactions/addTransactionToFirestore",
  async (dataTransaction) => {
    const {transaction, uid}= dataTransaction
    const addTransactionRef = await addDoc(
      collection(db, "Transactions"),
      transaction
    );
    console.log('UID IN JUNC', uid);
    const juncID = `${addTransactionRef.id}_${uid}`;
    console.log('TEST JUNC ID: ', juncID);
   await setDoc(
      doc(
        db,
        "junction_transaction_user",
        juncID
      ),
      { transactionID: addTransactionRef.id, userID: uid }
    );

    const newTransaction = { id: addTransactionRef.id, transaction };
    return newTransaction;
  }
);
//fetch transaction from the firestore
export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const querySnapshot = await getDocs(collection(db, "Transactions"));
    const transactions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      transaction: doc.data(),
    }));
    return transactions;
  }
);

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  // reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTransactionToFirestore.fulfilled, (state, action) => {
        state.transactionsArray.push(action.payload);
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactionsArray = action.payload;
      });
  },
});

export const {} = transactionsSlice.actions;

export default transactionsSlice.reducer;
