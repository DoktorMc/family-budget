import { combineReducers } from "redux";
import userSlice from "./slices/userSlice";
import transactionsSlice from "./slices/transactionsSlice";
import categorySlice from "./slices/categorySlice";
import junctionTransactionsUsersSlice from './slices/junctionTransactionsUsersSlice';


export const rootReducer = combineReducers({
  user: userSlice.reducer,
  transactions: transactionsSlice,
  categories: categorySlice,
  junctionTransactionsUsers: junctionTransactionsUsersSlice,
});