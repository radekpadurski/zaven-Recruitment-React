import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import "./App.css";
import Dashboard from "./Dashboard";
import { CookiesProvider } from "react-cookie";
import PrivateRoute from "./PrivateRoute";
import { UserContext } from "./User.contex";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  return (
    <UserContext.Provider
      value={{ firstName, setFirstName, lastName, setLastName, username, setUsername }}
    >
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
    </UserContext.Provider>
  );
}

export default App;
