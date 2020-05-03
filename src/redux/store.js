import { testReducer } from "./reducers/Test/TestReducer";
import { authReducer } from "./reducers/Auth/AuthReducer";
import { registerReducer } from "./reducers/Register/RegisterReducer";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleWare from "redux-thunk";

const reducers = combineReducers({
  testReducer,
  authReducer,
  registerReducer,
});

let store = configureStore({
  reducer: reducers,
  middleware: [thunkMiddleWare],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
