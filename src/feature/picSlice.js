import { createSlice } from '@reduxjs/toolkit';
import { marketPics } from '../data';
const initialState = {
  pic: marketPics,
};

const picSlice = createSlice({
  name: 'pic',
  initialState,
});
