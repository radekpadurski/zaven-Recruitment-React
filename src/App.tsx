import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import "./App.css";
import Dashboard from "./Dashboard";
import { CookiesProvider } from "react-cookie";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <CookiesProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </CookiesProvider>
  );
}

export default App;
