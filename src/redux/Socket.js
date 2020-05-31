import * as signalR from '@microsoft/signalr';
import store from './store';
import { getComments } from './reducers/Comments/CommentsReducer';
import { getUserTweets } from './reducers/User/UserReducer';
import { getMessages } from './reducers/Chat/chat.reducer';
import { getPosts, getPostComments } from './reducers/NewsFeed/newsfeed.reducer';

export const connection = new signalR.HubConnectionBuilder()
	.withUrl('http://localhost:8080/tweetHub', { accessTokenFactory: () => sessionStorage.getItem('_token') })
	.configureLogging(signalR.LogLevel.Information)
	.build();

export const chat = new signalR.HubConnectionBuilder()
	.withUrl('http://localhost:8080/ChatHub', { accessTokenFactory: () => sessionStorage.getItem('_token') })
	.configureLogging(signalR.LogLevel.Information)
	.build();

export async function chatStart() {
	try {
		await chat.start();
	} catch (err) {
		setTimeout(() => chatStart(), 5000);
	}
}

export async function socketStart() {
	try {
		await connection.start();
	} catch (err) {
		setTimeout(() => socketStart(), 5000);
	}
}

connection.on('NewComment', (data) => {
	store.dispatch(getComments(data.tweetId));
	store.dispatch(getPostComments());
});

connection.on('NewTweet', (data) => {
	if (data.userId === sessionStorage.getItem('_id')) {
		store.dispatch(getUserTweets());
	} else {
		store.dispatch(getPosts());
	}
});

chat.on('ReceiveMessage', (data) => {
	let from = sessionStorage.getItem('_id');
	let to = store.getState().chatReducer.userInfo.id;
	store.dispatch(getMessages(from, to));
});
