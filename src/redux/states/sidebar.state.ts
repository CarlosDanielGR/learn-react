import { createSlice } from "@reduxjs/toolkit";

const initialLinkActive = 0;

export const linkActiveSlice = createSlice({
  name: "linkActive",
  initialState: initialLinkActive,
  reducers: {
    newLinkActive: (state, action) => action.payload,
  },
});

export const { newLinkActive } = linkActiveSlice.actions;

export default linkActiveSlice.reducer;
