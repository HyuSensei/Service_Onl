import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getData } from "../../../helpers/localStorage";

const URL_API = import.meta.env.VITE_APP_API_URL;

const initialState = {
  dataAccount: {},
  isAuthenticated: false,
};

export const getAccount = createAsyncThunk("auth/accountCustomer", async () => {
  try {
    const token = getData("access_token");
    const res = await axios.get(URL_API + `/account`, {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const authSlice = createSlice({
  name: "customer/auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccount.pending, (state, action) => {
        state.dataAccount = {};
        state.isAuthenticated = false;
      })
      .addCase(getAccount.fulfilled, (state, action) => {
        state.dataAccount = action.payload.data;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(getAccount.rejected, (state, action) => {
        state.dataAccount = {};
        state.isAuthenticated = false;
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
