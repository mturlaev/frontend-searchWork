import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postResume = createAsyncThunk("/resume/post", async (img, thunkAPI) => {
  const state = thunkAPI.getState()  
  try {
      const formData = new FormData()
      console.log(img)
      formData.append("img", img)
      const res = await fetch("/resume", {
        method: "POST",
        body: formData
      });
      const data = res.json();
      return data
    } catch (error) {
      thunkAPI.rejectWithValue(error.message)
    }
});

export const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    resume: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postResume.fulfilled, (state, action) => {
      state.resume = action.payload
    })
  },
});

export default resumeSlice.reducer