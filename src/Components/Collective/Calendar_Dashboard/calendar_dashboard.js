import React, {Component} from 'react'
import './calendar_dashboard.css'

class CalendarDashboard extends Component{

	constructor(props){    //props will have data of all the days
		super(props)
		this.state = {
			expandedView: false
		}
		this.displayView = 
		<React.Fragment>
			<div onClick={() => this.expandDay("Sunday", this.state)} className="day-block">
				<p className="day-text" >Sunday</p>
			</div>

			<div onClick={() => this.expandDay("Monday", this.state)} className="day-block">
				<p className="day-text" >Monday</p>
			</div>

			<div onClick={() => this.expandDay("Tuesday", this.state)} className="day-block">
				<p className="day-text" >Tuesday</p>
			</div>

			<div onClick={() => this.expandDay("Wednesday", this.state)} className="day-block">
				<p className="day-text" >Wednesday</p>
			</div>

			<div onClick={() => this.expandDay("Thursday", this.state)} className="day-block">
				<p className="day-text" >Thursday</p>
			</div>

			<div onClick={() => this.expandDay("Friday", this.state)} className="day-block">
				<p className="day-text" >Friday</p>
			</div>

			<div onClick={() => this.expandDay("Saturday", this.state)} className="day-block">
				<p className="day-text" >Saturday</p>
			</div>
		</React.Fragment>
	}
	expandDay(day, currentState){
		if(currentState.expandedView === true){
			this.displayView = 
			<React.Fragment>
				<div onClick={() => this.expandDay("Sunday", this.state)} className="day-block">
					<p className="day-text" >Sunday</p>
				</div>

				<div onClick={() => this.expandDay("Monday", this.state)} className="day-block">
					<p className="day-text" >Monday</p>
				</div>

				<div onClick={() => this.expandDay("Tuesday", this.state)} className="day-block">
					<p className="day-text" >Tuesday</p>
				</div>

				<div onClick={() => this.expandDay("Wednesday", this.state)} className="day-block">
					<p className="day-text" >Wednesday</p>
				</div>

				<div onClick={() => this.expandDay("Thursday", this.state)} className="day-block">
					<p className="day-text" >Thursday</p>
				</div>

				<div onClick={() => this.expandDay("Friday", this.state)} className="day-block">
					<p className="day-text" >Friday</p>
				</div>

				<div onClick={() => this.expandDay("Saturday", this.state)} className="day-block">
					<p className="day-text" >Saturday</p>
				</div>
			</React.Fragment>

			document.querySelector('#inner-container-calendar').classList.add('inner-container-for-calendar')
			document.querySelector('#inner-container-calendar').classList.remove('inner-container-for-calendar-expanded')
			this.setState({expandedView: false})
		}
		else{
			this.displayView = 
			<div onClick={() => this.expandDay("Saturday", this.state)} className="day-block-expanded">
				<p className="day-text">{day}</p>
			</div>
			document.querySelector('#inner-container-calendar').classList.add('inner-container-for-calendar-expanded')
			document.querySelector('#inner-container-calendar').classList.remove('inner-container-for-calendar')
			this.setState({expandedView: true})

		}
	}


	render(){
		return(
			<div className="outer-container-dashboard">
	            <div className="background-for-dashboard">
	            	<div id="inner-container-calendar" className="inner-container-for-calendar">
	            		{this.displayView}
		            </div>    
	            </div>
	        </div>
        )

	}
}

export default CalendarDashboard