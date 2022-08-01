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

export const addResponse = createAsyncThunk(
  "addResponse",
  async ({id}, thunkApi) => {
    try {
      const response = await fetch(`http://localhost:4000/vacancy/response/${id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
      const data = await response.json();
      if (data.error) {
        return thunkApi.rejectWithValue(data.error);
      } else {
        return thunkApi.fulfillWithValue({data, id});
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);



export const fetchResponse = createAsyncThunk(
  "response/fetch",
  async (_, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/response", {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      if (data.error) {
        return thunkApi.rejectWithValue(data.error);
      } else {
        return thunkApi.fulfillWithValue(data);
      }
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const postResponses = createAsyncThunk(
  "response/post",
  async ({ element, checked, resume }, thunkApi) => {
    const state = thunkApi.getState();
    try {
      const res = await fetch("http://localhost:4000/response", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${state.user.token}`,
        },
        body: JSON.stringify({
          vacancy: element,
          resume: resume._id,
        }),
      });
      const data = await res.json();
      console.log(state.user.token);
      if (data.error) {
        return thunkApi.rejectWithValue(data.error);
      }
      return thunkApi.fulfillWithValue(data);
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const patchVacancies = createAsyncThunk(
  "vacancies/patch",
  async ({ element, checked }, thunkApi) => {
    const state = thunkApi.getState();
    try {
      const res = await fetch(`http://localhost:4000/vacancy/${element}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${state.user.token}`,
        },
        body: JSON.stringify({
          checked: !checked,
        }),
      });
      const data = await res.json();
      if (data.error) {
        return thunkApi.rejectWithValue(data.error);
      }
      return thunkApi.fulfillWithValue(data);
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
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

export const finder = createAsyncThunk("finder", async (text, thunkApi) => {
  return text;
});

// export const fethResponses = createAsyncThunk(
//   "responses/fetch",
//   async (_, thunkApi) => {
//     try {
//       const res = await fetch("http://localhost:4000/response");
//       const data = await res.json();
//       return data;
//     } catch (error) {
//       thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

export const searchVacanciSlice = createSlice({
  name: "search",
  initialState: {
    vacancy: [],
    loading: false,
    error: null,
    searchText: "",
    response: [],
    checked: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(finder.fulfilled, (state, action) => {
        state.searchText = action.payload;
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
      });
    builder
      .addCase(fetchResponse.fulfilled, (state, action) => {
        state.response = action.payload;
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postResponses.fulfilled, (state, action) => {
        state.response = action.payload;
        state.checked = !state.checked;
        state.error = action.payload;
      })
      .addCase(patchVacancies.fulfilled, (state, action) => {
        state.vacancy = action.payload;
        state.error = action.payload;
        state.loading = false;
        state.checked = !state.checked;
      });

      builder
      .addCase(addResponse.fulfilled, (state, action) => {
        state.vacancy = state.vacancy.map(item => {
          if (item._id === action.payload.id) {
            
            return action.payload.data
          }
          return item
        })
        state.loading = false;
        state.error = action.payload;
      })
      // .addCase(addResponse.pending, (state, action) => {
      //   state.response = action.payload;
      //   state.checked = !state.checked;
      //   state.error = action.payload;
      // })
      // .addCase(addResponse.rejected, (state, action) => {
      //   state.vacancy = action.payload;
      //   state.error = action.payload;
      //   state.loading = false;
      //   state.checked = !state.checked;
      // });
  },
  
});

export default searchVacanciSlice.reducer;
