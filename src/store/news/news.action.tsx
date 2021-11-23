import { createAsyncThunk } from "@reduxjs/toolkit";
import { default_api_url } from "../../constants/appConsts";
import axios from "axios";
// import { defaultHeaders } from "../defaultData/defaultData";

// const headers = defaultHeaders;

export const getNews: any = createAsyncThunk("fetchGetNews", async () => {
  const response = await axios.get(default_api_url);
  return response.data;
});
