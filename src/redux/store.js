import { authReducer } from "./reducers/Auth/AuthReducer";
import { registerReducer } from "./reducers/Register/RegisterReducer";
import { userReducer } from "./reducers/User/UserReducer";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleWare from "redux-thunk";
import { commentsReducer } from "./reducers/Comments/CommentsReducer";

const reducers = combineReducers({
  authReducer,
  registerReducer,
  userReducer,
  commentsReducer,
});

let store = configureStore({
  reducer: reducers,
  middleware: [thunkMiddleWare],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
