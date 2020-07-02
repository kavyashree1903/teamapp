
import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Individual/Essentials/Navbar/Navbar.js";
import MeetingDashboard from "./Components/Collective/Meeting_Dashboard/MeetingDashboard";
import TaskDashboard from "./Components/Collective/Meeting_Dashboard/MeetingDashboard";
import CalendarDashboard from "./Components/Collective/Meeting_Dashboard/MeetingDashboard";

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
          <div className="current-dashboard"><MeetingDashboard /></div>
          <div className="left-dashboard"><TaskDashboard /></div>
          <div className="right-dashboard"><CalendarDashboard /></div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
