import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Auth from './pages/Auth/Auth';
import Test from "./pages/Test/TestPage";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";

export default function MainRouter() {
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
            <Route path="/">
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

