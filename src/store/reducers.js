import { combineReducers } from "redux";
import userSlice from "./slices/userSlice";
import transactionsSlice from "./slices/transactionsSlice";
import categorySlice from "./slices/categorySlice";


export const rootReducer = combineReducers({
  user: userSlice.reducer,
  transactions: transactionsSlice,
  categories: categorySlice,
})