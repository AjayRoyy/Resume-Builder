import { configureStore } from "@reduxjs/toolkit";
import personalSlice from "../slices/personalSlice";
import employementSlice from "../slices/employementSlice";
import educationSlice from "../slices/educationSlice";
import websitesSlice from "../slices/websitesSlice";
import skillSlice from "../slices/skillSlice";

const Store = configureStore({
  reducer: {
    permantDetails: personalSlice,
    employmentDetails: employementSlice,
    educationDetails: educationSlice,
    websiteDetails: websitesSlice,
    skillsDetails: skillSlice,
  },
});

export default Store;
