import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
// import thunk from 'thunk';

const store = configureStore({
  reducer: {
    data: rootReducer,
  },
});

export default store
