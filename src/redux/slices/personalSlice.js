import { createSlice } from "@reduxjs/toolkit";

const permanetDetails = createSlice({
  name: "Permanet Details",
  initialState: {
    value: {},
  },
  reducers: {
    additems: (state, action) => {
      const { name, value } = action.payload;
      state.value = {
        ...state.value,
        [name]: value,
      };
    },
  },
});

export const { additems } = permanetDetails.actions;

export default permanetDetails.reducer;
