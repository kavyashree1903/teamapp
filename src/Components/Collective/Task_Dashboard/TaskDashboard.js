import React, { Component } from "react";
import Column from "../../Individual/Tasks/Column/Column";
import TaskCard from "../../Individual/Tasks/Task_Card/task_card";
import "./TaskDashboard.css";
class TaskDashboard extends Component {
	constructor(props){
		super(props)
		this.allotted 	= [<TaskCard details="Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test "/>]
		this.inProgress = [<TaskCard />, <TaskCard />]
		this.inReview   = [<TaskCard />, <TaskCard />, <TaskCard />]
		this.completed  = [<TaskCard />]
	}

  render() {
	return (
	  <div className="outer-container-dashboard">
		<div className="background-for-dashboard">
		  <div className="task-board">
			<Column tasks={this.allotted} heading="Allotted" />
			<Column tasks={this.inProgress} heading="In Progress" />
			<Column tasks={this.inReview} heading="In Review" />
			<Column tasks={this.completed} heading="Completed" />
		  </div>
		</div>
	  </div>
	);
  }
}
export default TaskDashboard;
