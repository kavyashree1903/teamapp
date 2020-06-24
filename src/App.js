
import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Individual/Essentials/Navbar/Navbar.js";
import MeetingDashboard from "./Components/Collective/Meeting_Dashboard/MeetingDashboard";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          hamburger-left={this.toggleLeftSideMenu}
          hamburger-right={this.toggleRightSideMenu}
        />
        <div className="container-app">
          <div className="meeting-dashboard">
              <div className="dashboard">  <MeetingDashboard /></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
