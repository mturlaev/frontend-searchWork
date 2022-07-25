import { configureStore, createAsyncThunk } from "@reduxjs/toolkit"
import resumeSlice from "../components/feauters/resumeSlice"

export const store = configureStore({
    reducer: {
        resume: resumeSlice
    }
})