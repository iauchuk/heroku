import { getCookie } from "../../helpers/helpers";

const token = getCookie("jwt");
export const defaultHeaders = {
  "Content-Type": "application/json",
  authorization: `Access ${token}`,
  "Access-Control-Allow-Origin": "*",
};
