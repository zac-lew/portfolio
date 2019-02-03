import React, { Component } from "react";
import MyNav from "./MyNav";
import "./Home.css";
import Intro from "./Intro";
import Skills from "./Skills";
import Work from "./Work";
import Footer from "./Footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home-wrapper">
        <MyNav />
        <Intro />
        <Skills />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default Home;
