import { authReducer } from "./reducers/Auth/AuthReducer";
import { registerReducer } from "./reducers/Register/RegisterReducer";
import { userReducer } from "./reducers/User/UserReducer";
import { newsfeedReducer } from "./reducers/NewsFeed/Newsfeed.reducer";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleWare from "redux-thunk";

const reducers = combineReducers({
  authReducer,
  registerReducer,
  userReducer,
  newsfeedReducer,
});

let store = configureStore({
  reducer: reducers,
  middleware: [thunkMiddleWare],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
