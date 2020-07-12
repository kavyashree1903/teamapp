import React, { Component } from "react";
import TaskCard from "../Task_Card/task_card"
import "./Column.css";
class Column extends Component {

render() {
	return (
        <div className="task-column">
        	<div className="column-heading">
        		<p className="column-status">{this.props.heading}</p>
        		<span className="task-list">
	        		{this.props.tasks}
        		</span>
        	</div>
      	</div>
    );
  }
}
export default Column;
