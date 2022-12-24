import { configureStore } from '@reduxjs/toolkit';
import hamburgerReducer from './feature/hamburgerSlice';
export const store = configureStore({
  reducer: {
    hamburger: hamburgerReducer,
  },
});
