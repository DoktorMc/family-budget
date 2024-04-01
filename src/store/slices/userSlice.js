import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";

const initialState = {
  user: {
    user: null,
    isLoading: true,
  },
  users: [],
};

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const allUsers = (nextPageToken) => {
  // List batch of users, 1000 at a time.
  getAuth()
    .listUsers(1000, nextPageToken)
    .then((listUsersResult) => {
      listUsersResult.users.forEach((userRecord) => {
        console.log('user', userRecord.toJSON());
      });
      if (listUsersResult.pageToken) {
        // List next batch of users.
       allUsers(listUsersResult.pageToken);
      }
    })
    .catch((error) => {
      console.log('Error listing users:', error);
    });
};
  return allUsers;
});

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
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        // state.users.push(action.payload);
        console.log("USERS", action.payload);
      })
    // .addCase(addTransactionToFirestore.fulfilled, (state, action) => {
    //   state.transactionsArray.push(action.payload);
    // })
    // .addCase(fetchTransactions.fulfilled, (state, action) => {
    //   state.transactionsArray = action.payload;
    // });
  },
});

export const { setUser, removeUser, setLoading } = userSlice.actions;

export default userSlice;
