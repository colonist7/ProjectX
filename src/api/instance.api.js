import * as axios from "axios";

const instance = axios.create({
  // withCredentials: true,
  baseURL: "http://localhost:8080/",
  proxy: {
    host: "http://localhost",
    port: 8080,
  },
  headers: {
    Authorization:
      sessionStorage.getItem("_token") && sessionStorage.getItem("_token").length !== 0
        ? `Bearer ${sessionStorage.getItem("_token")}`
        : "",
    // "Access-Control-Allow-Origin": "*",
  },
});

export default instance;

// store &&
//       store.getState().authReducer.isAuthenticated
