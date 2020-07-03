import React, {Component} from 'react'
import './task_card.css'

class TaskCard extends Component{
	constructor(props){
		super(props)

	}
	render(){
		return(
			<React.Fragment>
				<div className="task-card">
					<span className="task-details"></span>
				</div>
			</React.Fragment>
		)
	}
}