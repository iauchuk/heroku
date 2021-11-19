import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import {
  addUserInfo,
  changeUsersInfo,
  deleteUserInfo,
  getUsersInfo,
} from "./userInfo.actions";

export const reducerName = "userInfoReducer";

const userInfoSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: {
    [getUsersInfo.pending]: (state) => {
      return {
        ...state,
        isUsersLoading: true,
        isFetching: true,
      };
    },
    [getUsersInfo.fulfilled]: (state, action) => {
      return {
        ...state,
        usersList: action.payload,
        isUsersLoading: false,
        isFetching: false,
      };
    },
    [getUsersInfo.rejected]: (state) => {
      return {
        ...state,
        isUsersLoading: false,
        isFetching: false,
      };
    },
    [changeUsersInfo.pending]: (state) => {
      return {
        ...state,
        isUsersChanging: true,
        isFetching: true,
      };
    },
    [changeUsersInfo.fulfilled]: (state) => {
      return {
        ...state,
        isUsersChanging: false,
        isFetching: false,
      };
    },
    [changeUsersInfo.rejected]: (state) => {
      return {
        ...state,
        isUsersChanging: false,
        isFetching: false,
      };
    },
    [addUserInfo.pending]: (state) => {
      return {
        ...state,
        isUserInfoAdding: true,
        isFetching: true,
      };
    },
    [addUserInfo.fulfilled]: (state) => {
      return {
        ...state,
        isUserInfoAdding: false,
        isFetching: false,
      };
    },
    [addUserInfo.rejected]: (state) => {
      return {
        ...state,
        isUserInfoAdding: false,
        isFetching: false,
      };
    },
    [deleteUserInfo.pending]: (state) => {
      return {
        ...state,
        isUserDeleting: true,
        isFetching: true,
      };
    },
    [deleteUserInfo.fulfilled]: (state) => {
      return {
        ...state,
        isUserDeleting: false,
        isFetching: false,
      };
    },
    [deleteUserInfo.rejected]: (state) => {
      return {
        ...state,
        isUserDeleting: false,
        isFetching: false,
      };
    },
  },
});

export default userInfoSlice.reducer;
