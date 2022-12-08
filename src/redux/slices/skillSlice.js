import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const SkillsSlice = createSlice({
  name: "skills slice",
  initialState: {
    value: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.show = action.payload.showit;
      state.value.push({
        jobTitle: "Add Title",
        employer: "",
        id: uuidv4().split("-").join(""),
      });
    },
    deleteItems: (state, action) => {
      const { ids } = action.payload;
      let temp = state.value.filter((e) => e.id !== ids);
      state.value = temp;
    },
    updateItems: (state, action) => {
      const { name, value, id } = action.payload;
      state.value = state.value.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            [name]: value,
          };
        }
        return e;
      });
    },
  },
});

export const { addItems, deleteItems, updateItems } = SkillsSlice.actions;

export default SkillsSlice.reducer;
