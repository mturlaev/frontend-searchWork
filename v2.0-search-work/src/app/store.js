import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";

import resumeSlice from "../components/feauters/resumeSlice";
import searchVacanciSlice from "../components/feauters/searchVacanciSlice";
import userSlice from "../components/feauters/userSlice";

export const store = configureStore({
  reducer: {
    resume: resumeSlice,
    user: userSlice,
    search: searchVacanciSlice,
  },
});
