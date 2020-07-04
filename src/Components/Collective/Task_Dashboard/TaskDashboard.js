import React, { Component } from "react";
import Column from "../../Individual/Tasks/Column/Column";
import "./TaskDashboard.css";
import initialData from "./initial-data";
import {DragDropContext}  from "react-beautiful-dnd";

class TaskDashboard extends Component {
state=initialData;

onDragEnd = result => {

}

  render() {
    return this.state.columnOrder.map((columnId) => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
      return (
         <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="outer-container-dashboard">
            <div className="background-for-dashboard">
              <div className="task-board">


                <Column heading="Allotted" key={column.id} column={column} tasks={tasks} />
                {/*<Column heading="In Progress" />*/}
                {/*<Column heading="In Review" />*/}
                {/*<Column heading="Completed" />*/}
              </div>
            </div>
          </div>
         </DragDropContext>
      )
    });

  }}
export default TaskDashboard;
