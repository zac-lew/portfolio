import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import Home from "./Components/Home";

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Router>
          <Route path="/" exact children={<Home />} />
        </Router>
      </ParallaxProvider>
    );
  }
}

export default App;
