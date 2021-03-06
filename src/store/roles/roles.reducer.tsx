import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import { getRoles } from "./roles.actions";

const reducerName = "rolesReducer";

const rolesSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: {
    [getRoles.pending]: (state) => {
      return {
        ...state,
        isRolesLoading: true,
        isFetching: true,
      };
    },
    [getRoles.fulfilled]: (state, action) => {
      return {
        ...state,
        rolesList: action.payload,
        isRolesLoading: false,
        isFetching: false,
      };
    },
    [getRoles.rejected]: (state) => {
      return {
        ...state,
        isRolesLoading: false,
        isFetching: false,
      };
    },
  },
});

export default rolesSlice.reducer;
