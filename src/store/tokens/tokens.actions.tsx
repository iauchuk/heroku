import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase.config";

const userRef = collection(dataBase, "tokens");

export const getTokens: any = createAsyncThunk("tokens/getTokens", async () => {
  const items = await getDocs(userRef);
  const response = items.docs.map((item) => {
    return {
      ...item.data(),
    };
  });
  return response;
});
