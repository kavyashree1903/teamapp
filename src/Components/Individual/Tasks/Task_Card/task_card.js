import React, { Component } from 'react'
import './task_card.css'

class TaskCard extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<React.Fragment>
				<div className="task-card" draggable="true">
					<div className="task-details">
						<p>{this.props.details}</p>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default TaskCard

