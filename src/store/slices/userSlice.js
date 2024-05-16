import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";

const initialState = {
  user: {
    user: null,
    isLoading: true,
  },
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.user = action.payload;
    },
    removeUser: (state) => {
      state.user.user = null;
    },
    setLoading: (state, action) => {
      state.user.isLoading = action.payload;
    },
  },
});

export const { setUser, removeUser, setLoading } = userSlice.actions;

export default userSlice;
