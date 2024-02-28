import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from './../firebase-config';
const initialState = {
  transactionsArray: [],
}
//add transaction to the firestore
export const addTransactionToFirestore = createAsyncThunk(
  'transactions/addTransactionToFirestore',
  async (transaction) => {
    const addTransactionRef = await addDoc(collection(db, 'Transactions'), transaction);
    const newTransaction = { id: addTransactionRef.id, transaction }
    return newTransaction
  }
);
//fetch transaction from the firestore
export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async () => {
    const querySnapshot = await getDocs(collection(db, 'Transactions'));
    const transactions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      transaction: doc.data(),
    }));
    return transactions;
  }
)

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  // reducers: {},
  extraReducers: (builder) => { 
    builder
      .addCase(addTransactionToFirestore.fulfilled, (state, action) => {
      state.transactionsArray.push(action.payload);
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => { 
        state.transactionsArray = action.payload;
      })
  }

});

export const { } = transactionsSlice.actions;

export default transactionsSlice.reducer;