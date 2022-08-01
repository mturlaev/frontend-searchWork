import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  signingUp: false,
  signingIn: false,
  error: null,
  loading: false,
  user: localStorage.getItem("user"),
  token: localStorage.getItem("token"),
  email: localStorage.getItem("email"),
  isActivated: localStorage.getItem("isActivated"),
};

export const registration = createAsyncThunk(
  "user/registration",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.message) {
        return thunkAPI.rejectWithValue(data.message);
      } else {
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.message) {
        return thunkAPI.rejectWithValue(data.message);
      } else {
        localStorage.setItem("isActivated", data?.user?.isActivated);
        localStorage.setItem("user", data.user.id);
        localStorage.setItem("email", data.user.email)
        localStorage.setItem("token", data.accessToken);
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  localStorage.clear();
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.signingUp = true;
        state.loading = false
      })
      .addCase(registration.rejected, (state, action) => {
        state.signingUp = false;
        state.error = action.payload;
        state.loading = false

      })

      .addCase(registration.pending, (state, action) => {
        state.loading = true
        state.signingUp = false;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.signingIn = true;
        state.error = null;
        state.token = action.payload.accessToken;
        state.isActivated = action.payload.user.isActivated;
        state.user = action.payload.user.id;
        state.email = action.payload.user.email;
      })
      .addCase(login.rejected, (state, action) => {
        state.signingIn = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state, action) => {
        state.loading = true
        state.signingIn = false;
      })

      .addCase(logout.fulfilled, (state, action) => {
        state.signingIn = null;
        state.error = null;
        state.token = null;
        state.user = null;
        state.email = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = "Ошибка при выходе";
      });
  },
});

export default userSlice.reducer;
