import React, { Component } from "react";
import { Provider } from "react-redux";
import Store from "../redux/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "./Auth/Auth";
import Register from "./Register/Register";
import Home from "./Home/Home";
import User from "./User/UserMain/User";
import { socketStart } from "../redux/Socket";

class App extends Component {
  componentDidMount() {
    socketStart();
  }

  render() {
    return (
      <Provider store={Store}>
        <MainRouter />
      </Provider>
    );
  }
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
