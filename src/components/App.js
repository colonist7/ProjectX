import React from "react";
import { Provider } from "react-redux";
import Store from "../redux/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "./Auth/Auth";
import Test from "./Test/TestPage";
import Register from "./Register/Register";
import Home from "./Home/Home";
import User from "./User/User";

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
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
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
