import React, { Component } from "react";
import "./Column.css";
class Column extends Component {

render() {
	return (
        <div className="task-column">
        	<div className="column-heading">
        		<p className="column-status">{this.props.heading}</p>
        	</div>
      	</div>
    );
  }
}
export default Column;
