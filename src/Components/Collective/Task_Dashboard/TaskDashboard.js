import React, { Component } from "react";
import Column from "../../Individual/Tasks/Column/Column";
import TaskCard from "../../Individual/Tasks/Task_Card/task_card";
import "./TaskDashboard.css";
class TaskDashboard extends Component {
	constructor(props){
		super(props)
		//Fetch from database later
		this.allotted   = [<TaskCard details="1"/>]
		this.inProgress = [<TaskCard details="2"/>, <TaskCard details="3"/>]
		this.inReview   = [<TaskCard details="4"/>, <TaskCard details="5"/>, <TaskCard details="6"/>]
		this.completed  = [<TaskCard details="7"/>]
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
				this.alloted    = [...document.querySelectorAll('#allotted.task-card')]
				this.inProgress = [...document.querySelectorAll('#in-progress.task-card')]
				this.inReview   = [...document.querySelectorAll('#in-review.task-card')]
				this.completed  = [...document.querySelectorAll('#completed.task-card')]
				//update in database
				console.log(this.allotted)
			})
		})
		columns.forEach((column, index) => {
			column.addEventListener('dragover', event => {
				var taskCardsInColumn = [...column.querySelectorAll('.task-card:not(.is-dragging)')]
				var mouseY = event.clientY
				// var offset = Number.NEGATIVE_INFINITY
				var nextTaskCard
				if(taskCardsInColumn.length != 0){
					nextTaskCard = taskCardsInColumn.reduce((closest, child) => {//returns closest element
											const box 	 = child.getBoundingClientRect()
											const offset = mouseY - box.top - box.height/2 //difference between mouseY and centre of task card in that column
											if(offset < 0 && offset > closest.offset) //if we are above the task card and smaller than the closest one previously
												return {offset: offset, element: child}
											else
												return closest

										}, {offset: Number.NEGATIVE_INFINITY}).element
				}
				var taskToBeDropped = document.querySelector('.is-dragging')
				if(nextTaskCard == null)
					column.appendChild(taskToBeDropped)
				else
					column.insertBefore(taskToBeDropped, nextTaskCard)
			})
		})
	}
	getNextTaskCard(column, mouseY){//returns the task card right below the mouse position while dragging
		var taskCardsInColumn = column.querySelectorAll('.task-card:not(.is-dragging)')
		taskCardsInColumn.reduce((closest, child) => {
			const box 	 = child.getBoundingClientRect()
			const offset = mouseY - box.top - box.height/2 //difference between mouseY and centre of task card in that column
			if(offset < 0 && offset > closest.offset) //if we are above the task card and smaller than the closest one previously
				return child
			else
				return closest

		}, {offset: Number.NEGATIVE_INFINITY})
	}

	componentDidMount(){
		this.dragAndDrop()
	}

  render() {
  	console.log(this.allotted)
	return (
	  <div className="outer-container-dashboard">
		<div className="background-for-dashboard">
		  <div className="task-board">
			<Column id="allotted" tasks={this.allotted} heading="Allotted" />
			<Column id="in-progress" tasks={this.inProgress} heading="In Progress" />
			<Column id="in-review" tasks={this.inReview} heading="In Review" />
			<Column id="completed" tasks={this.completed} heading="Completed" />
		  </div>
		</div>
	  </div>
	);
  }
}
export default TaskDashboard;
