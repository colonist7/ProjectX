import React from "react";
import { Provider } from "react-redux";
import Store from "../redux/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "./Auth/Auth";
import Register from "./Register/Register";
import Home from "./Home/Home";
import User from "./User/UserMain/User";
import NewsFeedContainer from "./NewsFeed/NewsFeedContainer";
import ProtectedRoute from "../utils/ProtectedRoute";

function App() {
  return (
    <Provider store={Store}>
      <MainRouter />
    </Provider>
  );
}

function MainRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/newsfeed">NewsFeed</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <ProtectedRoute component={NewsFeedContainer} path="/newsfeed" />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
