import React, { Component } from "react";
import Column from "../../Individual/Tasks/Column/Column";
import "./TaskDashboard.css";
class TaskDashboard extends Component {
  render() {
    return (
      <div className="outer-container">
        <div className="task-dashboard">
          <div className="task-columns">
            <Column heading="Alloted" />
            <Column heading="In Progress" />
            <Column heading="In Review" />
            <Column heading="Completed" />
            <div className="pseudo" />
            <div className="pseudo" />
            <div className="pseudo" />
            <div className="pseudo" />
          </div>
        </div>
      </div>
    );
  }
}
export default TaskDashboard;
