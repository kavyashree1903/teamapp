
import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Individual/Essentials/Navbar/Navbar.js";
import MeetingDashboard from "./Components/Collective/Meeting_Dashboard/MeetingDashboard";
import TaskDashboard from "./Components/Collective/Meeting_Dashboard/MeetingDashboard";
import CalendarDashboard from "./Components/Collective/Meeting_Dashboard/MeetingDashboard";

class App extends Component {
  constructor() {
    super();
    this.dashboardInView = <MeetingDashboard />
  }

  render() {

    this.dashboardInView = <MeetingDashboard />
    return (
      <React.Fragment>
        <Navbar
          hamburger-left={this.toggleLeftSideMenu}
          hamburger-right={this.toggleRightSideMenu}
        />
        <div className="container-app">
          <div className="container-app-dashboard">
            <div className="left-dashboard"></div>
            <div className="current-dashboard">{this.dashboardInView}</div>
            <div className="right-dashboard"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
