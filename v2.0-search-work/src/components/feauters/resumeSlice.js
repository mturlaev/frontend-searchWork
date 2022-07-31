import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


export const fetchCategory = createAsyncThunk("category/fetch", 
async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/category");
    const data = await res.json()
    return data
  } catch (error) {
    thunkAPI.rejectWithValue(error.message)
  }
});


// export const fetchVacancies = createAsyncThunk(
// "vacancies", async(_, thunkAPI) => {
//   try {
//     const res = await fetch("http://localhost:4000/category");
//     const data = await res.json()
//     return data
//   } catch (error) {
//     thunkAPI.rejectWithValue(error.message)
//   }
// });





export const postResume = createAsyncThunk("/resume/post", async ({img, name, surName, age, phone, email, city, category, position, experience}, thunkAPI) => {
  const state = thunkAPI.getState();

  try {
      const formData = new FormData()
      console.log(img)
      formData.append("img", img)
      formData.append('name', name)
      formData.append('surname', surName)
      formData.append('age', age)
      formData.append('phone', phone)
      formData.append('email', email)
      formData.append('city', city)
      formData.append('categoryId', category)
      formData.append('position', position)
      formData.append('experience', experience)

      const res = await fetch("http://localhost:4000/resume", {
        method: "POST",
        headers: { "Content-type": "application/json",
        Authorization: `Bearer ${state.user.token}` 
      },
        body: formData
      });
      const data = await res.json();
      return data
    } catch (error) {
      thunkAPI.rejectWithValue(error.message)
    }
  });
  
  export const fetchResume = createAsyncThunk(
    "resume/fetch", async (_, thunkAPI) => {
      try {
        const res = await fetch("http://localhost:4000/resume");
        const data = await res.json();
        return data
      } catch (error) {
        thunkAPI.rejectWithValue(error.message)
      }
    }
    );

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
      state.resume = state.resume.push(action.payload)
      state.loading = false
    })
    .addCase(fetchCategory.fulfilled, (state, action) => {
      state.stack = action.payload
      state.loading = false
    })
    .addCase(fetchResume.fulfilled, (state, action) => {
      state.resume = action.payload
      state.loading = false
    })
  },
});


export default resumeSlice.reducer