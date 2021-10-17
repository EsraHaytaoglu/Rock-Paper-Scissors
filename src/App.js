import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Result from "./components/Result";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Rules from "./components/Rules";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/game">
            <Result />
          </Route>
          <Route  path="/rules">
            <Rules />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
