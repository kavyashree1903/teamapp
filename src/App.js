import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Individual/Essentials/Navbar/Navbar.js";
import MeetingDashboard from "./Components/Collective/Meeting_Dashboard/MeetingDashboard";
import CalendarDashboard from "./Components/Collective/Calendar_Dashboard/calendar_dashboard";
import TaskDashboard from "./Components/Collective/Task_Dashboard/TaskDashboard";

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
  /*
    To add another view:
    1. Change this.numberOfViews
    2. Change the "right" key of the last element in this.views to the next number
    3. Add the new view object to this.views with the appropriate keys
  */
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
    this.updatePagination(newState.currentView)
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
    this.updatePagination(newState.currentView)
    this.setState(newState)
  }
  updatePagination(currentSlideSelector){
    var indicators = document.querySelectorAll('.slide-pagination')
    indicators.forEach(item => {
      item.classList.remove('current-slide')
    })
    indicators[currentSlideSelector - 1].classList.add('current-slide')
  }

  render() {
    
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-app">
          <div className="container-app-dashboard">
            <div className="left-dashboard" onClick= {() => this.showLeftView(this.state)}></div>
            <div className="current-dashboard">{this.views[this.state.currentView - 1].view}</div>
            <div className="right-dashboard" onClick= {() => this.showRightView(this.state)}></div>
          </div>
          <div class="slide-status">
            <div id="first" className="slide-pagination current-slide"></div>
            <div id="second" className="slide-pagination"></div>
            <div id="third" className="slide-pagination"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
