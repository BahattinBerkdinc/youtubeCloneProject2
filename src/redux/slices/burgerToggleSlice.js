import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggleAside: false,
};

const burgerToggleSlice = createSlice({
  name: 'burgerToggle',
  initialState,
  reducers: {
    setToggleAside: (state, action) => {
      state.toggleAside = action.payload;
    },
  },
});

export const { setToggleAside } = burgerToggleSlice.actions;
export default burgerToggleSlice.reducer;