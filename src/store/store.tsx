import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { isPresent } from "../helpers/helpers";
import { createBrowserHistory } from "history";

const redirectMiddle = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const history = createBrowserHistory({ forceRefresh: true });
  history.push("/login");
  console.log("history", history);
};

const defaultMiddleware =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
  (storeAPI: any) => (next: any) => (action: any) => {
    if (!isPresent(localStorage.getItem("accessToken"))) {
      redirectMiddle();
    }
    return next(action);
  };

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const middlewareEnhancer = applyMiddleware(defaultMiddleware);

const store = configureStore({
  reducer: rootReducer,
  enhancers: [middlewareEnhancer],
});

export default store;
