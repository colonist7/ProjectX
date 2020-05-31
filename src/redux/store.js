import { authReducer } from './reducers/Auth/AuthReducer';
import { registerReducer } from './reducers/Register/RegisterReducer';
import { userReducer } from './reducers/User/UserReducer';
import { newsfeedReducer } from './reducers/NewsFeed/newsfeed.reducer';
import { chatReducer } from './reducers/Chat/chat.reducer';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleWare from 'redux-thunk';
import { commentsReducer } from './reducers/Comments/CommentsReducer';
import { notificationReducer } from './reducers/Notification/NotificationReducer';

const reducers = combineReducers({
	authReducer,
	registerReducer,
	userReducer,
	newsfeedReducer,
	chatReducer,
	commentsReducer,
	notificationReducer,
});

let store = configureStore({
	reducer: reducers,
	middleware: [thunkMiddleWare],
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
