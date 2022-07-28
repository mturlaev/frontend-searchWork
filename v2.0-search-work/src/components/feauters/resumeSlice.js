import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk("category/fetch", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/category");
    const data = await res.json()
    return data
  } catch (error) {
    thunkAPI.rejectWithValue(error.message)
  }
})

export const postResume = createAsyncThunk("/resume/post", async ({img, name, surName, age, phone, email, city, category, position, experience}, thunkAPI) => {
  const state = thunkAPI.getState()  
  try {
      const formData = new FormData()
      console.log(img)
      formData.append("image", img)
      formData.append('name', name)
      formData.append('surname', surName)
      formData.append('age', age)
      formData.append('phone', phone)
      const res = await fetch("http://localhost:4000/resume", {
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
    error: null,
    stack: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(postResume.fulfilled, (state, action) => {
      state.resume = action.payload
      state.loading = false
    })
    .addCase(fetchCategory.fulfilled, (state, action) => {
      state.stack = action.payload
      state.loading = false
    })
  },
});

export default resumeSlice.reducer