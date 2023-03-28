import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};
const hamburgerSlice = createSlice({
  name: 'hamburger',
  initialState,
  reducers: {
    openHamburger: (state) => {
      state.open = true;
    },
    closeHamburger: (state) => {
      state.open = false;
    },
  },
});

// console.log(hamburgerSlice);
export const { openHamburger, closeHamburger } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;
