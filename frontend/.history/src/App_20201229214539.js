import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import { AuthProvider } from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </AuthProvider>
    </Router>
  );
}

export default App;
