import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import { getTokens } from "./tokens.actions";

const reducerName = "tokenReducer";

const tokensSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: {
    [getTokens.pending]: (state) => {
      return {
        ...state,
        isTokensLoading: true,
        isFetching: true,
      };
    },
    [getTokens.fulfilled]: (state, action) => {
      return {
        ...state,
        token: action.payload,
        isTokensLoading: false,
        isFetching: false,
      };
    },
    [getTokens.rejected]: (state) => {
      return {
        ...state,
        isTokensLoading: false,
        isFetching: false,
      };
    },
  },
});

export default tokensSlice.reducer;
