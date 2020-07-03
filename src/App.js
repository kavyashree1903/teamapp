
import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Individual/Essentials/Navbar/Navbar.js";
import MeetingDashboard from "./Components/Collective/Meeting_Dashboard/MeetingDashboard";
import TaskDashboard from "./Components/Collective/Meeting_Dashboard/MeetingDashboard";
import CalendarDashboard from "./Components/Collective/Meeting_Dashboard/MeetingDashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentView: 1,
      leftView: 3, //set to number of views
      rightView: 2
    }
    this.numberOfViews = 3
    this.views = 
    [
      {
        id: 1,
        view: <MeetingDashboard />,
        left: this.numberOfViews,
        right: 2
      },
      {
        id: 2,
        view: <TaskDashboard />,
        left: 1,
        right: 3
      },
      {
        id: 3,
        view: <CalendarDashboard />,
        left: 2,
        right: 1
      }
    ]    
  }

  showLeftView(currentState){
    var newLeftView
    if(currentState.leftView === 1) 
      newLeftView = this.numberOfViews //to make it like a circle
    else
      newLeftView = currentState.leftView - 1

    var newState = {
      currentView: currentState.leftView,
      leftView: this.views[newLeftView - 1].id, //-1 to account for the array indices starting from 0
      rightView: currentState.currentView
    }
    document.querySelector('.left-dashboard').classList.add('roll-to-current-from-left')    
    document.querySelector('.current-dashboard').classList.add('roll-to-right-from-current')    
    document.querySelector('.right-dashboard').classList.add('roll-to-left-from-right')    
    this.setState(newState)
  }

  showRightView(currentState){
    var newRightView
    if(currentState.rightView === this.numberOfViews) 
      newRightView = 1 //to make it like a circle
    else
      newRightView = currentState.rightView + 1

    var newState = {
      currentView: currentState.rightView,
      rightView: this.views[newRightView - 1].id, //-1 to account for the array indices starting from 0
      leftView: currentState.currentView
    }
    document.querySelector('.right-dashboard').classList.add('roll-to-current-from-right')    
    document.querySelector('.current-dashboard').classList.add('roll-to-left-from-current')    
    document.querySelector('.left-dashboard').classList.add('roll-to-right-from-left')
    this.setState(newState)
    
  }


  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-app">
          <div className="container-app-dashboard">
            <div onClick= {() => this.showLeftView(this.state)} className="left-dashboard">{this.views[this.state.leftView - 1].view}</div>
            <div className="current-dashboard">{this.views[this.state.currentView - 1].view}</div>
            <div onClick= {() => this.showRightView(this.state)} className="right-dashboard">{this.views[this.state.rightView - 1].view}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
