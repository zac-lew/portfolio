import React, { Component } from "react";
import MyNav from "./MyNav";
import "./Home.css";
import Intro from "./Intro";
import Skills from "./Skills";
import Work from "./Work";
import Footer from "./Footer";
import Education from "./Education";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <MyNav />
        <div className="home-wrapper">
          <Intro />
          <Skills />
          <Work />
          <Education />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
