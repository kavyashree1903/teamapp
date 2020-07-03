import React, { Component } from "react";
import Column from "../../Individual/Tasks/Column/Column";
import "./TaskDashboard.css";
class TaskDashboard extends Component {
  render() {
    return (
      <div className="outer-container-dashboard">
        <div className="background-for-dashboard">
          <div className="task-board">
            <Column heading="Alloted" />
            <Column heading="In Progress" />
            <Column heading="In Review" />
            <Column heading="Completed" />
          </div>
        </div>
      </div>
    );
  }
}
export default TaskDashboard;
