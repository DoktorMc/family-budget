import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";
import { db } from "./../firebase-config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const initialState = {
  user: {
    user: null,
    isLoading: true,
  },
  users: [],
};

export const addUserToFirebase = createAsyncThunk(
  "users/addUserToFirebase",
  async (dataUser) => {
    const userData = dataUser;
    console.log("UserTOFire", userData);
   await setDoc(doc(db, "Users", userData.uid), {
      userName: userData.displayName,
      userEmail: userData.email,
    });

    const addUserRef = doc(db, "Users", userData.uid);
    console.log("NEW USER REF", addUserRef);

    const newUser = {
      id: addUserRef.id,
      userName: userData.displayName,
      userEmail: userData.email,
    };
    console.log("NEW USER", newUser);
    return newUser;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(addUserToFirebase.fulfilled, (state, action) => {
      console.log("TEST TO WORKING REDUCER");
      state.users.push(action.payload);
    });
  },
});

export const { setUser, removeUser, setLoading } = userSlice.actions;

export default userSlice.reducer;

// setUser, removeUser, setLoading
