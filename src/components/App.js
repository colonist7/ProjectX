import React, { Component } from "react";
import { Provider } from "react-redux";
import Store from "../redux/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "./Auth/Auth";
import Register from "./Register/Register";
import Home from "./Home/Home";
import Chat from "./Chat/ChatMain/Chat";
import User from "./User/UserMain/User";
import NewsFeedContainer from "./NewsFeed/NewsFeedContainer";
import ProtectedRoute from "../utils/ProtectedRoute";
import PublicRoute from "../utils/PublicRoute";
import SideBar from "./SideBar/SideBar";
import { socketStart, chatStart } from "../redux/Socket";

class App extends Component {
  componentDidMount() {
    socketStart();
    chatStart();
  }

  render() {
    return (
      <Provider store={Store}>
        <Router>
          <SideBar />
          <MainRouter />
        </Router>
      </Provider>
    );
  }
}

function MainRouter() {
  return (
    <Switch>
      <PublicRoute restricted component={Auth} path="/login" />
      <PublicRoute restricted component={Register} path="/register" />
      <ProtectedRoute component={User} path="/user" />
      <ProtectedRoute component={NewsFeedContainer} path="/newsfeed" />
      <ProtectedRoute component={Chat} path="/chat" />
      <PublicRoute component={Home} path="/" />
    </Switch>
  );
}

export default App;
