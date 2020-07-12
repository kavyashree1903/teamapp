import React, { Component } from 'react'
import './task_card.css'

class TaskCard extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<React.Fragment>
				<div className="task-card">
					<div className="task-details"></div>
					<p>{this.props.details}</p>
				</div>
			</React.Fragment>
		)
	}
}

export default TaskCard