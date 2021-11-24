import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { isPresent } from "../helpers/helpers";

const authRedirectMiddleware =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
  (storeAPI: any) => (next: any) => (action: any) => {
    if (
      !window.location.href.includes("login") &&
      !isPresent(localStorage.getItem("accessToken"))
    ) {
      window.location.href = "/login";
    }
    return next(action);
  };

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const middlewareEnhancer = applyMiddleware(authRedirectMiddleware);

const store = configureStore({
  reducer: rootReducer,
  enhancers: [middlewareEnhancer],
});

export default store;
