import { configureStore, createAsyncThunk } from "@reduxjs/toolkit"
import resumeSlice from "../components/feauters/resumeSlice"
import searchVacanciSlice from "../components/feauters/searchVacanciSlice"

export const store = configureStore({
    reducer: {
        resume: resumeSlice,
        search: searchVacanciSlice
    }
})