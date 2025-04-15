import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAuthData: {
    success: false,
    data: null,
  },
  dateFormat: "",
};

export const authenticatioSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.userAuthData = action.payload;
    },
    setDateTimeConfigs: (state, action) => {
      state.dateFormat = action.payload;
    },
  },
});

export const { setAuthData, setDateTimeConfigs } = authenticatioSlice.actions;

export const authenticationReducer = authenticatioSlice.reducer;
