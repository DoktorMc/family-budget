import { combineReducers } from "redux";
import userSlice from "./slices/userSlise";


export const rootReducer = combineReducers({
  user: userSlice.reducer,
})