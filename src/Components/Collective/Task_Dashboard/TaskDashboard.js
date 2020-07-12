import React, { Component } from "react";
import Column from "../../Individual/Tasks/Column/Column";
import TaskCard from "../../Individual/Tasks/Task_Card/task_card";
import "./TaskDashboard.css";
class TaskDashboard extends Component {
	constructor(props){
		super(props)
		this.state = {
			allotted   : [<TaskCard details="1"/>],
			inProgress : [<TaskCard details="2"/>, <TaskCard details="3"/>],
			inReview   : [<TaskCard details="4"/>, <TaskCard details="5"/>, <TaskCard details="6"/>],
			completed  : [<TaskCard details="7"/>]
		}
	}
	dragAndDrop(){
		var tasks 	= document.querySelectorAll('.task-card')
		var columns = document.querySelectorAll('.task-list')
		
		tasks.forEach(task => {
			task.addEventListener('dragstart', () => {
				task.classList.add('is-dragging')
			})

			task.addEventListener('dragend', () => {
				task.classList.remove('is-dragging')
			})
		})
		columns.forEach((column, index) => {
			column.addEventListener('dragover', event => {
				var taskDrop = document.querySelector('.is-dragging')
				column.appendChild(taskDrop)
				
				// this.setState(
				// 	{
				// 		allotted  : [...this.state.alloted]
				// 		inProgress: [...this.state.inProgress]
				// 		inReview  : [...this.state.inReview]
				// 		completed : [...this.state.completed]

				// 	}
				// )
			})
		})
	}

	componentDidMount(){
		this.dragAndDrop()
	}

  render() {
	return (
	  <div className="outer-container-dashboard">
		<div className="background-for-dashboard">
		  <div className="task-board">
			<Column id="1" tasks={this.state.allotted} heading="Allotted" />
			<Column id="2" tasks={this.state.inProgress} heading="In Progress" />
			<Column id="3" tasks={this.state.inReview} heading="In Review" />
			<Column id="4" tasks={this.state.completed} heading="Completed" />
		  </div>
		</div>
	  </div>
	);
  }
}
export default TaskDashboard;
