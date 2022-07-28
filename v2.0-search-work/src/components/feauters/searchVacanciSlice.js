import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchVacancy = createAsyncThunk(
    "fetchVacancy",
    async(_, thunkApi) => {
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
)

export const finder = createAsyncThunk('finder', 
  async (text, thunkApi) => {
    return text
  }
)
 
export const searchVacanciSlice = createSlice ({
    name: "search",
    initialState: {
        vacancy: [],
        loading: false,
        error: null,
        searchText: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

        .addCase(finder.fulfilled, (state, action) => {
          state.searchText = action.payload
        })
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
          })
    },
});

export default searchVacanciSlice.reducer;