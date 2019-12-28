import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    );
  }
}

export default App;
