import * as signalR from "@microsoft/signalr";
import store from "./store";
import { getComments } from "./reducers/Comments/CommentsReducer";
import { getUserTweets } from "./reducers/User/UserReducer";

const connection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:8080/tweetHub", { accessTokenFactory: () => sessionStorage.getItem("_token") })
  .configureLogging(signalR.LogLevel.Information)
  .build();

export async function socketStart() {
  try {
    await connection.start();
    console.log("connected");
  } catch (err) {
    console.log(err);
    setTimeout(() => socketStart(), 5000);
  }
}

connection.on("NewComment", (data) => {
  store.dispatch(getComments(data.tweetId));
});

connection.on("NewTweet", (data) => {
  store.dispatch(getUserTweets());
});
