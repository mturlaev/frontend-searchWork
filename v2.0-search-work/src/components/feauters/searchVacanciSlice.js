import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchVacancy = createAsyncThunk(
  "fetchVacancy",
  async (_, thunkApi) => {
    try {
      const response = await fetch("http://localhost:4000/vacancy");
      const data = await response.json();
      if (data.error) {
        return thunkApi.rejectWithValue(data.error);
      } else {
        return thunkApi.fulfillWithValue(data);
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const createVacancy = createAsyncThunk(
  "createVacancy",
  async (
    { positionText, salaryText, companyText, cityText, descriptionText },
    thunkApi
  ) => {
    try {
      const vacancy = await fetch("http://localhost:4000/vacancy", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: positionText,
          salary: salaryText,
          company: companyText,
          city: cityText,
          text: descriptionText,
        }),
      });
      const data = await vacancy.json();

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue();
    }
  }
);

export const searchVacanciSlice = createSlice({
  name: "search",
  initialState: {
    vacancy: [{
      name: "qwer",
      salary: 5000,
      text: "asdf"
    }],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancy.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchVacancy.fulfilled, (state, action) => {
        state.loading = false;
        state.vacancy = action.payload;
      })
      .addCase(fetchVacancy.rejected, (state, action) => {
        state.loading = false;
        state.vacancy = action.payload.vacancy;
        state.error = action.payload;
      });

      builder.addCase(createVacancy.fulfilled, (state, action) => {
        state.vacancy = action.payload;
      });
  },
});

export default searchVacanciSlice.reducer;
